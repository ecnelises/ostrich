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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, service: DashboardService, router: ActivatedRoute, public dialog: MatDialog) {
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

  openDialog(): void {
    let dialogRef = this.dialog.open(DashboardNewDialogComponent, {
      width: '80%',
      height: '70%',
      data: {}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  getTaskGroups() {
    return this.taskGroups
  }
}

@Component({
  selector: 'app-dashboard-new-dialog',
  templateUrl: './dashboard-new-dialog.component.html',
  styleUrls: ['./dashboard-new-dialog.component.css']
})
export class DashboardNewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DashboardNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
