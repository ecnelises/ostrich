import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {
  }

  doRegister(email: string, password: string, nickname: string) {
    return this.http.post('/api/users', {
      email: email,
      password: password,
      nickname: nickname
    }).toPromise()
  }
}
