import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import { CalendarEvent, WeekDay } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-week-view-header',
  template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped">
      <div class="cal-day-headers">
        <div
          class="cal-header"
          *ngFor="let day of days"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [class.cal-drag-over]="day.dragOver"
          [ngClass]="day.cssClass"
          (mwlClick)="dayHeaderClicked.emit({day: day})"
          mwlDroppable
          (dragEnter)="day.dragOver = true"
          (dragLeave)="day.dragOver = false"
          (drop)="day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})">
          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>
          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}">
    </ng-template>
  `
})
export class CalendarWeekViewHeaderComponent {
  @Input() days: WeekDay[];

  @Input() locale: string;

  @Input() customTemplate: TemplateRef<any>;

  @Output()
  dayHeaderClicked: EventEmitter<{ day: WeekDay }> = new EventEmitter<{
    day: WeekDay;
  }>();

  @Output()
  eventDropped: EventEmitter<{
    event: CalendarEvent;
    newStart: Date;
  }> = new EventEmitter<{ event: CalendarEvent; newStart: Date }>();
}
