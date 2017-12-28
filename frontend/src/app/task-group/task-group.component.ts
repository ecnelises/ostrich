import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cardDragStart(event) {
    console.log('Drag started', event)
  }

  cardDragEnd(event) {
    console.log('Drag ended', event)
  }

}
