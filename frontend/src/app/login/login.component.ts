import { Component, OnInit, Injectable } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from './login.service'
import { MatSnackBar } from '@angular/material'
import { LoginRequest } from './login.model'
import { MatProgressBar } from '@angular/material/progress-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  email: string
  password: string

  progressBarExists: boolean

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.progressBarExists = false
  }

  ngOnInit() { }

  submitLogin() {
    this.loginService.login(new LoginRequest(this.email, this.password))
      .then(response => {
        localStorage.setItem('token', response.token)
        localStorage.setItem('token-expire', String(response.expire.getTime()))
        localStorage.setItem('userId', response.userId.toString())
        this.progressBarExists = false
        this.router.navigateByUrl('/projects')
      })
      .catch(error => {
        this.loginFailPrompt()
        this.progressBarExists = false
      })
    this.progressBarExists = true
  }

  private loginFailPrompt() {
    this.snackBar.open('登录失败，请检查密码是否正确', '确定', {
      duration: 2000,
    })
  }

}
