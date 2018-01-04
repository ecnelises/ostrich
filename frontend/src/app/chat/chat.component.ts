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
    {value: 'group#0', viewValue: 'Group'}
  ];

  chatrecords = [[], [], [], [], [], [], [], [], [], []];
  records = [];

  constructor(private cs: ChatService) {
    this.initializeWebSocketConnection(localStorage.getItem('userId'));
    let that = this;
    this.cs.getData(localStorage.getItem('subjectId'))
      .then(res => {
        let nicknames = res['groupNicknames'];
        let ids = res['groupIds'];
        console.log(nicknames);
        for (let i = 0; i < nicknames.length; i++) {
          let tmp = {value: ids[i] + '#' + (i + 1), viewValue: nicknames[i]}
          that.users.push(tmp);
        }
        console.log(that.users);
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
        that.records = that.chatrecords[that.selectedValue.split('#')[1]];
      });
    });
  }

  sendMessage() {
    let date = new Date();
    let tmp = new Date();
    date.setTime(tmp.getTime() + 28800000);
    if (this.selectedValue.includes('group')) {
      let chatMessage = {
        sender: localStorage.getItem('nickname'),
        content: $('#message').val(),
        subjectId: localStorage.getItem('subjectId'),
        senderId: localStorage.getItem('userId'),
        sendTime: date
      };
      this.stompClient.send('/app/toAllMessage' , {}, JSON.stringify(chatMessage));
      $('#message').val('');
    }
    else {
      let chatMessage = {
        sender: localStorage.getItem('nickname'),
        receiver: this.selectedValue.split('#')[0],
        content: $('#message').val(),
        sendTime: date,
        senderId: localStorage.getItem('userId'),
      };
      this.stompClient.send('/app/toOneMessage' , {}, JSON.stringify(chatMessage));
      $('#message').val('');
    }
  }

}
