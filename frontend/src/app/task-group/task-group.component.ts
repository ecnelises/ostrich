import { Component, OnInit, transition } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TaskGroupService } from './task-group.service';
import { Injectable, trigger, state, style } from '@angular/core';
import { animate } from '@angular/core';
import { stagger, query } from '@angular/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskModel } from './task-group.model';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css'],
  providers: [TaskGroupService],
  animations: [
    trigger('toggleCompletionAnimation', [
      state('undone', style({ opacity: 1 })),
      transition('undone => void', [
        animate(200, style({ opacity: 0, display: 'none', height: 0 }))
      ])
    ])
  ]
})

@Injectable()
export class TaskGroupComponent implements OnInit {

  tasksStore: TaskGroupService

  constructor(tasksService: TaskGroupService) {
    this.tasksStore = tasksService
  }

  ngOnInit() {
  }

  getFinishedTasks() {
    return this.tasksStore.getFinishedTasks()
  }

  getUnfinishedTasks() {
    return this.tasksStore.getUnfinishedTasks()
  }

  toggleTask(task: TaskModel) {
    if (task.finished) {
      this.tasksStore.undoFinishTask(task)
    } else {
      this.tasksStore.finishTask(task)
    }
  }

  cardDragStart(event) {
    console.log('Drag started', event)
  }

  cardDragEnd(event) {
    console.log('Drag ended', event)
  }

}
