import { Component } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  private serverUrl = 'http://127.0.0.1:8080/ws'
  private title = 'WebSockets chat';
  private stompClient;
  message: string;
  private id: number

  constructor() {
    this.initializeWebSocketConnection();
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
    let chatMessage = {
      sender: 123456,
      content: $('#message').val(),
      sendTime: new Date()
    };
    this.stompClient.send('/app/message' , {}, JSON.stringify(chatMessage));
    $('#message').val('');
  }

}
