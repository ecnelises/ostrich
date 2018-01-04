import { Component, OnInit } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {NotificationService} from "./notification.service";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [NotificationService]
})
export class NotificationComponent implements OnInit {

  private serverUrl = 'http://127.0.0.1:8080/ws'
  private stompClient;

  notifications: any;

  constructor(private ns: NotificationService) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
  }

  ngOnInit() {
    let that = this;
    this.ns.getNotifications()
      .then(res => {
        console.log(res);
        that.notifications = [];
        let nicknames = res['nicknames'];
        let messages = res['messages'];
        for (let i = 0; i < nicknames.length; i++){
          let tmp = {
            sender: nicknames[i],
            message: messages[i]
          }
          that.notifications.push(tmp);
        }
      })
  }

  sendMessage() {
    console.log(111);
    let chatMessage = {
      userGroup: [1, 2, 3, 4, 101],
      sender: 5
    };
    this.stompClient.send('/app/notification' , {}, JSON.stringify(chatMessage));
  }
}
