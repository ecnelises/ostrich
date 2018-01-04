import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBar } from '@angular/material'
import { MatProgressBar } from '@angular/material/progress-bar'
import { RegisterConfirmationService } from './register-confirmation.service'

@Component({
  selector: 'app-register-confirmation',
  template: `{{promptText}}`
})
export class RegisterConfirmationComponent implements OnInit {
  promptText: string

  constructor(
    private service: RegisterConfirmationService,
    private router: Router,
    private route: ActivatedRoute) {
    this.promptText = '确认注册中...'
  }

  ngOnInit() {
    this.service.confirm(this.route.snapshot.params['key'])
      .then(_ => {
        this.promptText = '注册成功'
        this.router.navigateByUrl('/login')
      })
      .catch(_ => {
        this.promptText = '注册失败'
        this.router.navigateByUrl('/register')
      })
  }
}
