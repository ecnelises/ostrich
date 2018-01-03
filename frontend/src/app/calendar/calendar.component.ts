import * as $ from 'jquery';
import 'fullcalendar';
import { CalendarService } from "./calendar.service";
import {Component, Inject, ElementRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogInnerComponent} from "../dialog-inner/dialog-inner.component";


@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService],
})

export class CalendarComponent {

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
      $('#add').click();
    },
    eventClick: function(calEvent, jsEvent, view) {
      // change the border color just for fun
      document.getElementById('detail').className = calEvent.id;
      $('#detail').addClass(calEvent.id);
      $('#detail').click();
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

  constructor(private element: ElementRef, private cs: CalendarService, public dialog: MatDialog) {
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
    );
  }

  openDetailDialog(): void {
    let id = document.getElementById('detail').className;
    this.cs.findEvent(parseInt(id))
      .then(res => {
        let start = new Date();
        start.setTime(Date.parse(res['eventStartTime']));
        let end = new Date();
        end.setTime(Date.parse(res['eventEndTime']));
        let remind = new Date();
        start.setTime(Date.parse(res['eventRemindTime']));
        let dialogRef = this.dialog.open(DialogInnerComponent, {
          width: '500px',
          data: {
            eventStartTime: start,
            eventEndTime: end,
            eventRemindTime: remind,
            eventTitle: res['eventTitle'],
            eventContent: res['eventContent'],
            isDelete: true
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
            this.cs.removeEvent(parseInt(id))
              .then( res => {
                $('angular2-fullcalendar').fullCalendar('removeEvents', [id]);
              });
          }
          else {

          }
        });
      });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogInnerComponent, {
      width: '500px',
      data: {
        eventStartTime: this.eventStartTime,
        eventEndTime: this.eventEndTime,
        eventRemindTime: this.eventRemindTime,
        eventTitle: this.eventTitle,
        eventContent: this.eventContent,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cs.createEvent(result.eventTitle, result.eventContent,
        result.eventStartTime.toISOString(), result.eventEndTime.toISOString(), result.eventRemindTime.toISOString())
        .then( res => {
            this.addEventToArray(res['eventId'], result.eventTitle, result.eventContent, result.eventStartTime.toISOString(), result.eventEndTime.toISOString(), result.eventRemindTime.toISOString());
          }
        );
      console.log('The dialog was closed');
    });
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
