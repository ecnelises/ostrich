import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NotificationService{

  constructor(private http: HttpClient) {

  }

  getNotifications() {
    return this.http.get("/api/notifications/index", {
      headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    }).toPromise();
  }

}
