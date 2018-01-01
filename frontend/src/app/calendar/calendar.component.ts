import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { CalendarService } from "./calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService],
})

export class CalendarComponent{

  eventStartTime: any;
  eventEndTime: any;
  eventRemindTime: any;

  eventTitle: any;
  eventContent: any;
  eventId: any;

  events = [];

  options:Object = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    height: 'auto',
    eventContent: String,
    navLinks: true, // can click day/week names to navigate views
    dayClick: function(date, jsEvent, view) {
      // change the day's background color just for fun
      document.getElementById('event-form').style.display = 'block';
    },
    eventClick: function(calEvent, jsEvent, view) {
      // change the border color just for fun
      document.getElementById('event-detail-form').style.display = 'block';
      document.getElementById('id').textContent = calEvent.id;
      document.getElementById('title').textContent = calEvent.title;
      document.getElementById('content').textContent = calEvent.content;
      document.getElementById('st').textContent = calEvent.start;
      document.getElementById('et').textContent = calEvent.end;
      document.getElementById('rt').textContent = calEvent.remind;
    }
  };

  clearInput() {
    this.eventId = null;
    this.eventTitle = "";
    this.eventContent = "";
    this.eventStartTime = null;
    this.eventEndTime = null;
    this.eventRemindTime = null;
  }

  addEventToArray(id, title, content, start, end, remind){
    let tmp = {
      id: id,
      title: title,
      content: content,
      start: start,
      end: end,
      remind: remind
    }
    this.events.push(tmp);
    $('angular2-fullcalendar').fullCalendar('addEventSource',[tmp]);
    // $('angular2-fullcalendar').fullCalendar('option', 'height', 500);
  }

  close() {
    this.clearInput();
    document.getElementById('event-detail-form').style.display = 'none';
  }

  removeevent() {
    let eventId = document.getElementById('id').textContent;
    this.cs.removeEvent(parseInt(eventId))
      .then( res => {
        $('angular2-fullcalendar').fullCalendar('removeEvents',[eventId]);
        this.close();
      });
  }

  addevent() {
    if (this.eventTitle == "" ||this.eventContent == ""
      || this.eventStartTime == null || !this.eventEndTime == null
      || this.eventRemindTime == null){
      alert("信息不完整！");
      return;
    }
    console.log(this.eventStartTime);
    this.cs.createEvent(this.eventTitle, this.eventContent,
      this.eventStartTime, this.eventEndTime, this.eventRemindTime)
      .then( res => {
        this.addEventToArray(res["eventId"], this.eventTitle, this.eventContent, this.eventStartTime, this.eventEndTime, this.eventRemindTime);
        document.getElementById('event-form').style.display = 'none';
      }
    );
  }

  constructor(private element:ElementRef, private cs:CalendarService) {
  }

  ngOnInit():void {
  }

  ngAfterViewInit(){
    this.cs.getData().then(
      res => {
        $('angular2-fullcalendar').fullCalendar(this.options);
        let events = res["events"];
        for (let i = 0; i < events.length; i++){
          let o = events[i];
          this.addEventToArray(o["id"], o["title"], o["content"], o["startTime"], o["endTime"], o["remindTime"]);
        }
      }
    )
  }

  hideThisForm(e: any){
    this.clearInput();
    e.target.style.display = 'none';
  }

  notHideThisForm(e: any){
    e.stopPropagation();
  }

  fullCalendar(...args: any[]) {
    if (!args) {
      return;
    }
    switch (args.length) {
      case 0:
        return;
      case 1:
        return $(this.element.nativeElement).fullCalendar(args[0]);
      case 2:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1]);
      case 3:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
    }
  }
}
