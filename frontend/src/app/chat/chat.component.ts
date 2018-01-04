import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import * as $ from 'jquery';
import {ChatService} from "./chat.service";

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
  selectedValue = 'group';

  users = [
    {value: 'group', viewValue: 'Group'},
    {value: 'user', viewValue: 'User'}
  ];

  constructor(private cs: ChatService) {
    this.cs.getData()
      .then(res => {
        console.log(res);
        this.initializeWebSocketConnection();
      });
  }

  clear() {
    document.getElementById('messageArea').innerHTML = '';
    console.log("clear");
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/user/' + 2 + '/message', (message) => {
        message = JSON.parse(message.body);

        let messageElement = document.createElement('li');

        messageElement.classList.add('chat-message');

        let usernameElement = document.createElement('span');
        let usernameText = document.createTextNode(message.sender);
        usernameElement.appendChild(usernameText);
        messageElement.appendChild(usernameElement);

        let timeElement = document.createElement('span');
        let timeText = document.createTextNode(message.sendTime);
        timeElement.appendChild(timeText);
        messageElement.appendChild(timeElement);

        let textElement = document.createElement('p');
        let messageText = document.createTextNode(message.content);
        textElement.appendChild(messageText);

        messageElement.appendChild(textElement);

        $('#messageArea').append(messageElement);
        $('#messageArea').scrollTop = $('#messageArea').scrollHeight;
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
        receiver: 2, // todo
        content: $('#message').val(),
        sendTime: new Date()
      };
      this.stompClient.send('/app/toOneMessage' , {}, JSON.stringify(chatMessage));
      $('#message').val('');
    }
  }

}
