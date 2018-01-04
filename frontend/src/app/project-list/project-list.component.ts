import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component'
import { MatList, MatCard } from '@angular/material'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add-user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/add-user.svg'))
    iconRegistry.addSvgIcon(
      'leave',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/leave.svg'))
    iconRegistry.addSvgIcon(
      'detail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pic/detail.svg'))
  }

  ngOnInit() {
  }

}
