import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {ChatService} from "./chat.service";
import {ChatRecord} from "./chat.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent {
  private serverUrl = 'http://127.0.0.1:8080/ws'
  private title = 'WebSockets chat';
  private stompClient;
  message: string;

  private id: number;
  selectedValue = 'group#0';

  users = [
    {value: 'group#0', viewValue: 'Group'},
    {value: 'user#1', viewValue: 'User'},
  ];

  chatrecords = [[], [], [], [], [], [], [], [], [], []];
  records = [];

  constructor(private cs: ChatService) {
    this.initializeWebSocketConnection(localStorage.getItem('userId'));
    let that = this;
    this.cs.getData()
      .then(res => {
        console.log(res);
        that.users.push();
        that.chatrecords.push([], []);
        });
  }

  clear() {
    this.records = this.chatrecords[this.selectedValue.split('#')[1]];
    console.log("clear");
  }

  initializeWebSocketConnection(userId: string) {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/user/' + userId + '/message', (message) => {
        message = JSON.parse(message.body);
        console.log(that.chatrecords);
        let record = new ChatRecord(message.sender, message.sendTime, message.content);
        that.chatrecords[that.selectedValue.split('#')[1]].push(record);
      });
    });
  }

  sendMessage() {
    // console.log($('#message').val());
    if (this.selectedValue == 'group'){
      let chatMessage = {
        sender: 123456,
        content: $('#message').val(),
        sendTime: new Date()
      };
      this.stompClient.send('/app/toAllMessage' , {}, JSON.stringify(chatMessage));
      $('#message').val('');
    }
    else {
      let chatMessage = {
        sender: 123456,
        receiver: 101, // todo
        content: $('#message').val(),
        sendTime: new Date()
      };
      this.stompClient.send('/app/toOneMessage' , {}, JSON.stringify(chatMessage));
      $('#message').val('');
    }
  }

}
