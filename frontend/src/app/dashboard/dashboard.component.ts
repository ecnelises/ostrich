import { Component, OnInit, Inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TaskGroupModel } from '../task-group/task-group.model';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from './dashboard.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTab, MatSelect, MatMenu, MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  service: DashboardService
  projectId: number
  taskGroups: TaskGroupModel[]
  router: ActivatedRoute

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
      service: DashboardService, router: ActivatedRoute, public dialog: MatDialog,
      private snackBar: MatSnackBar) {
    iconRegistry.addSvgIcon(
        'plus',
        sanitizer.bypassSecurityTrustResourceUrl('assets/pic/plus-icon.svg'))
    this.service = service
    this.router = router
    this.projectId = 0
  }

  ngOnInit() {
    this.projectId = this.router.snapshot.params['project_id']
    this.service.fetchGroups(this.projectId)
      .then(groups => this.taskGroups = groups)
  }

  newTaskDialog(): void {
    if (this.taskGroups.length == 0) {
      this.snackBar.open('当前还没有任何任务组', '确定', {
        duration: 2000,
      })
      return
    }
    let dialogRef = this.dialog.open(DashboardNewDialogComponent, {
      width: '420px',
      height: '300px',
      data: { content: '', groups: this.taskGroups, selectedGroupId: this.taskGroups[0].id }
    })
    dialogRef.afterClosed().subscribe(result => {
      let resultObj = JSON.parse(result)
      this.service.addTask(resultObj.content, this.taskGroups.find(group => group.id == resultObj.groupId))
    })
  }

  newTaskGroupDialog(): void {
    let dialogRef = this.dialog.open(DashboardNewDialogGroupComponent, {
      width: '420px',
      height: '240px',
      data: { name: '' }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.service.addGroup(result, this.projectId, this.taskGroups)
    })
  }

  getTaskGroups() {
    return this.taskGroups
  }
}

@Component({
  selector: 'app-dashboard-new-dialog',
  templateUrl: './new-dialogs/dashboard-new-dialog.component.html',
  styleUrls: ['./new-dialogs/dashboard-new-dialog.component.css']
})
export class DashboardNewDialogComponent {
  JSON: JSON

  constructor(
    public dialogRef: MatDialogRef<DashboardNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.JSON = JSON
   }

  onNoClick(): void {
    this.dialogRef.close()
  }
}

@Component({
  selector: 'app-dashboard-new-dialog-group',
  templateUrl: './new-dialogs/dashboard-new-dialog-group.component.html',
  styleUrls: ['./new-dialogs/dashboard-new-dialog-group.component.css']
})
export class DashboardNewDialogGroupComponent {
  constructor(
    public dialogRef: MatDialogRef<DashboardNewDialogGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
