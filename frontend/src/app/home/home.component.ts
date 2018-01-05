import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';
import { HomeService } from './home.service'
import { Router } from '@angular/router';
import { MatButton } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
  animations: []
})

export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/projects')
    }
  }
}
