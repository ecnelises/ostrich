import { Component, Input, OnInit} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {AppService} from "./app.service";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material'
import {NotificationService} from "./notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
  providers: [AppService]
})

export class AppComponent implements OnInit {
  private serverUrl = 'http://127.0.0.1:8080/ws'
  private stompClient;

  constructor(public as: AppService, private router: Router,  private snackBar: MatSnackBar) {
    this.initializeWebSocketConnection(localStorage.getItem('userId'));
  }

  ngOnInit() {
  }

  initializeWebSocketConnection(userId: string) {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/user/' + userId + '/notification', (notification) => {
        notification = JSON.parse(notification.body);
        that.as.createNotification(notification.sender, notification.message)
          .then(res  => {
            that.snackBar.open('您有一条新消息', '确定', {
              duration: 2000,
            });
          });
      });
    });
  }
}
