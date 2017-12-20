import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomeService{
  response: any;
  tasks: any;

  constructor(private http:HttpClient) {

  }

  getData() {
    return this.http.get("/tasks/index")
      .toPromise();
  }

  removeItem(id: number) {
    return this.http.get("/tasks/remove", {
        params: {
          "id": id.toString()
        }
      }
    ).toPromise();
  }

  addItem(index: number, content: String) {
    return this.http.get("/tasks/save", {
        params: {
          "columnId": index.toString(),
          "content": content.toString()
        }
      }
    ).toPromise();
  }

  changeColumn(id: number, columnIndex: number) {
    return this.http.get("/tasks/changeColumn", {
        params: {
          "id": id.toString(),
          "columnId": columnIndex.toString()
        }
      }
    ).toPromise();
  }

  changeIsDoneState(id: number) {
    return this.http.get("/tasks/isdone", {
        params: {
          "id": id.toString()
        }
      }
    ).toPromise();
  }

  changePriority(id: number, priority: number) {
    return this.http.get("/tasks/priority", {
        params: {
          "id": id.toString(),
          "priority": priority.toString()
        }
      }
    ).toPromise();
  }
}
