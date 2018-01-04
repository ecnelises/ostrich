import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterConfirmationService {
  constructor(private http: HttpClient) { }

  confirm(key: string) {
    return this.http.post('/api/users/confirm', key).toPromise()
  }
}
