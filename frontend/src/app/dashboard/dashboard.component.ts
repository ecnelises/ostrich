import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TaskGroupModel } from '../task-group/task-group.model';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from './dashboard.service'

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, service: DashboardService, router: ActivatedRoute) {
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

  getTaskGroups() {
    return this.taskGroups
  }
}
