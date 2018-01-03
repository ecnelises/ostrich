import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CalendarService{
  response: any;
  tasks: any;

  constructor(private http:HttpClient) {

  }

  getData() {
    return this.http.get("/api/events/index")
      .toPromise();
  }

  removeEvent(eventId: number) {
    return this.http.get("/api/events/remove", {
        params: {
          eventId: eventId.toString()
        }
      }
    ).toPromise();
  }

  findEvent(eventId: number) {
    return this.http.get("/api/events/find", {
        params: {
          eventId: eventId.toString()
        }
      }
    ).toPromise();
  }

  createEvent(title: String, content: String, startTime :String, endTime :String, remindTime :String) {
    console.log("AA" + startTime);
    return this.http.post("/api/events/create", {
        title: title.toString(),
        content: content.toString(),
        startTime: startTime.toString(),
        endTime: endTime.toString(),
        remindTime: remindTime.toString()
      }
    ).toPromise();
  }

  editEvent(eventId: number, title: String, content: String, startTime :String, endTime :String, remindTime :String) {
    return this.http.post("/api/events/editone", {
        eventId: eventId.toString(),
        title: title.toString(),
        content: content.toString(),
        startTime: startTime.toString(),
        endTime: endTime.toString(),
        remindTime: remindTime.toString()
      }
    ).toPromise();
  }
}

