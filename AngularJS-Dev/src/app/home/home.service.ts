import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HomeService{
  response: any;
  tasks: any;

  constructor(private http:HttpClient) {

  }

  getData() {
    return new Promise((resolve, rej) => {
      this.http.get("/tasks/index")
        .subscribe(res => {
          resolve(res);
        })
    })
  }

  removeItem(id: number) {
    return new Promise((resolve, rej) => {
      this.http.get("/tasks/remove", {
          params: {
            "id": id.toString()
          }
        }
      ).subscribe(res => resolve(res));
    })
  }

  addItem(index: number, content: String) {
    return new Promise((resolve, rej) => {
      this.http.get("/tasks/save", {
          params: {
            "columnId": index.toString(),
            "content": content.toString()
          }
        }
      ).subscribe(res => resolve(res));
    })
  }

  changeColumn(id: number, columnIndex: number) {
    return new Promise((resolve, rej) => {
      this.http.get("/tasks/changeColumn", {
          params: {
            "id": id.toString(),
            "columnId": columnIndex.toString()
          }
        }
      ).subscribe(res => resolve(res));
    });
  }

}
