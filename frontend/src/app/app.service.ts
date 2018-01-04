import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {

  }

  createNotification(senderId: string, sender: string, message: string) {
    return this.http.post("/api/notifications/create", {
      senderId: senderId,
      sender: sender,
      message: message
    }, {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
      }
    ).toPromise();
  }
}
