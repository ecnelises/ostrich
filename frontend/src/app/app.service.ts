import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {

  }

  createNotification(sender: number, message: string) {
    return this.http.post("/api/notifications/create", {
      sender: sender.toString(),
      message: message
    }
    ).toPromise();
  }
}
