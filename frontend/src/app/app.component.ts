import { Component, Input} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {AppService} from "./app.service";
import {NotificationService} from "./notification/notification.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
  providers: [AppService]
})

export class AppComponent {
  private serverUrl = 'http://127.0.0.1:8080/ws'
  private stompClient;

  constructor(public as: AppService) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/user/' + 2 + '/notification', (notification) => {
        notification = JSON.parse(notification.body);
        that.as.createNotification(notification.sender, notification.message)
          .then(res => {
            NotificationService.notifications.push(notification);
          });
      });
    });
  }
}
