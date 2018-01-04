import { Component, OnInit } from '@angular/core'
import { RegisterService } from './register.service'
import { Router } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBar } from '@angular/material'
import { MatProgressBar } from '@angular/material/progress-bar'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string
  password: string
  nickname: string
  passwordConfirmation: string
  progressBarExists: boolean

  constructor(
    private service: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.progressBarExists = false
  }

  ngOnInit() {
  }

  submitRegister(): void {
    if (this.password.length < 6) {
      this.inputValidation('密码长度必须大于等于六位')
      return
    }
    if (this.password != this.passwordConfirmation) {
      this.inputValidation('请输入相同的确认密码')
      return
    }
    if (this.nickname.length == 0 || this.email.length == 0) {
      this.inputValidation('输入不得有空')
      return
    }
    this.service.doRegister(this.email, this.password, this.nickname)
      .then(_ => {
        this.snackBar.open('注册成功', '请检查您的邮箱', {
          duration: 2000
        })
        this.router.navigateByUrl('/')
      })
      .catch(_ => {
        this.snackBar.open('注册失败', '注册过程中产生了错误', {
          duration: 2000
        })
      })
  }

  private inputValidation(text: string): void {
    this.snackBar.open('输入错误', text, {
      duration: 2000
    })
  }
}
