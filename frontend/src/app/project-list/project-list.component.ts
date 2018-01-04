import { Component, OnInit, Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component'
import { MatList, MatCard, MatSnackBar } from '@angular/material'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { ProjectListService } from './project-list.service'
import { ProjectModel } from './project-list.model'
import { MatProgressSpinner } from '@angular/material'
import { MatTooltip } from '@angular/material'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
@Injectable()
export class ProjectListComponent implements OnInit {
  private router: Router
  service: ProjectListService
  projects: ProjectModel[]
  showSnipper: boolean

  constructor(iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer,
      service: ProjectListService,
      public dialog: MatDialog,
      private snackBar: MatSnackBar) {
    this.showSnipper = true
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/plus-icon.svg'))
    iconRegistry.addSvgIcon(
      'add-user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/add-user.svg'))
    iconRegistry.addSvgIcon(
      'leave',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/leave.svg'))
    iconRegistry.addSvgIcon(
      'detail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/detail.svg'))
    this.service = service
  }

  ngOnInit() {
    this.service.fetchProjects()
      .then(projects => {
        this.projects = projects
        this.showSnipper = false
      })
      .catch(error => {
        this.requestFailPrompt()
        this.showSnipper = false
      })
  }

  newProjectDialog() {
    let dialogRef = this.dialog.open(NewProjectDialogComponent, {
      width: '420px',
      height: '260px',
      data: { title: '', description: '' }
    })
    dialogRef.afterClosed().subscribe(result => {
      let resultObj = JSON.parse(result)
      if (resultObj.title.length != 0) {
        this.service.createProject(resultObj.title, resultObj.description, this.projects)
      }
    })
  }

  inviteMember(event: Event, project: ProjectModel) {
    event.stopPropagation()
    let dialogRef = this.dialog.open(InviteMembersDialogComponent, {
      width: '420px',
      height: '380px',
      // TODO: Change this style
      data: { project: project, email1: '', email2: '', email3: '' }
    })
    dialogRef.afterClosed().subscribe(result => {
      let resultObj = JSON.parse(result)
      let emails = resultObj.emails.filter(email => email.length != 0)
      this.service.inviteMembers(resultObj.project, emails).then(_ => {
        this.snackBar.open('已发出邀请', '确定', {
          duration: 2000,
        })
      })
    })
  }

  seeDetail(event: Event, project: ProjectModel) {
    event.stopPropagation()
    let dialogRef = this.dialog.open(ProjectDetailDialogComponent, {
      width: '420px',
      height: '240px',
      data: { project: project }
    })
  }

  leaveProject(event: Event, project: ProjectModel) {
    event.stopPropagation()
    let dialogRef = this.dialog.open(LeaveProjectDialogComponent, {
      width: '420px',
      height: '240px',
      data: { project: project }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.service.leaveProject(project).then(_ => {
          this.projects = this.projects.filter(item => item.id != project.id)
          this.snackBar.open('已退出项目', '确定', {
            duration: 2000,
          })
        })
      }
    })
  }

  private requestFailPrompt() {
    this.snackBar.open('请求失败，请重试', '确定', {
      duration: 2000,
    })
  }
}

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './dialogs/new-project-dialog.component.html',
  styleUrls: ['./dialogs/new-project-dialog.component.css']
})
export class NewProjectDialogComponent {
  JSON: JSON

  constructor(
    public dialogRef: MatDialogRef<NewProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.JSON = JSON
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-invite-members-dialog',
  templateUrl: './dialogs/invite-members.component.html',
  styleUrls: ['./dialogs/invite-members.component.css']
})
export class InviteMembersDialogComponent {
  JSON: JSON

  constructor(
    public dialogRef: MatDialogRef<InviteMembersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.JSON = JSON
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-project-detail-dialog',
  templateUrl: './dialogs/project-detail-dialog.component.html',
  styleUrls: ['./dialogs/project-detail-dialog.component.css']
})
export class ProjectDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-leave-project-dialog',
  templateUrl: './dialogs/leave-project-dialog.component.html',
  styleUrls: ['./dialogs/leave-project-dialog.component.css']
})
export class LeaveProjectDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LeaveProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
