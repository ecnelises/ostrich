import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button'
import { MatMenu } from '@angular/material/menu'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('token-expire')
    this.router.navigateByUrl('/login')
  }
}
