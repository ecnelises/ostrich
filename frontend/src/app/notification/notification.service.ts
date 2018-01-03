import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NotificationService{

  static notifications = [];

  constructor(private http: HttpClient) {

  }

  getNotifications() {
    return this.http.get("/api/notifications/index").toPromise();
  }

}
