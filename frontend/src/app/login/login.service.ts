import { Injectable } from '@angular/core'
import { Http, Headers } from "@angular/http"
import { LoginRequest, LoginResponse } from './login.model'

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  login(request: LoginRequest): Promise<LoginResponse> {
    return this.http.post('/api/sessions', request, { headers: new Headers({'Content-Type': 'application/json'}) })
      .toPromise()
      .then(response => response.json())
      .then(obj => new LoginResponse(obj.token, obj.expire))
      .catch(error => Promise.reject(error || error.message))
  }

}