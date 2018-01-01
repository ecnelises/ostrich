import {Component, Input} from '@angular/core';
import 'fullcalendar';

@Component({
  templateUrl: './calendar.html',
  selector: 'angular2-fullcalendar'
})

export class CalendarPrototypeComponent {

  @Input() options;

}
