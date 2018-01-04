import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) {

  }

  getData(subjectId: string) {
    return this.http.get('/api/chats/index',
      {
        params: {
          'subjectId': subjectId
        },
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
      }
    ).toPromise();
  }
}

