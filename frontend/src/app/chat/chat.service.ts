import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get('/api/chats/index',
      {
        params: {
          'subjectId': location.href.length.toString()
        },
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
      }
    ).toPromise();
  }
}

