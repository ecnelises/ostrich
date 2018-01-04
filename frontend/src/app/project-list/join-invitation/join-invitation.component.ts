import { Component, OnInit, Injectable, Inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MatList, MatCard, MatSnackBar } from '@angular/material'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { MatProgressSpinner } from '@angular/material'
import { MatTooltip } from '@angular/material'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { ProjectModel } from '../project-list.model'
import { ProjectListService } from '../project-list.service'

@Component({
  selector: 'app-join-invitation',
  templateUrl: './join-invitation.component.html',
  styleUrls: ['./join-invitation.component.css']
})
@Injectable()
export class JoinInvitationComponent implements OnInit {
  project: ProjectModel
  projectTitle: string

  constructor(private route: ActivatedRoute, private service: ProjectListService, private router: Router, private snackBar: MatSnackBar) {
    this.project = null
    this.projectTitle = ''
  }

  ngOnInit() {
    let projectId = +this.route.snapshot.params['project_id']
    this.service.getProject(projectId).then(project => {
      this.project = project
      this.projectTitle = project.title
    })
  }

  confirmJoin() {
    this.service.joinProject(this.project).then(
      _ => this.router.navigateByUrl('/')
    ).catch(_ => {
      this.snackBar.open('请求失败，请重试', '确定', {
        duration: 2000,
      })
    })
  }
}
