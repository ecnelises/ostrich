import { Component, OnInit, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component'
import { MatList, MatCard, MatSnackBar } from '@angular/material'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { ProjectListService } from './project-list.service'
import { ProjectModel } from './project-list.model'
import { MatProgressSpinner } from '@angular/material'

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
      private snackBar: MatSnackBar) {
    this.showSnipper = true
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

  private requestFailPrompt() {
    this.snackBar.open('请求失败，请重试', '确定', {
      duration: 2000,
    })
  }
}
