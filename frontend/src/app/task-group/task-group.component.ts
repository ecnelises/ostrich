import { Component, OnInit, transition } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Injectable, trigger, state, style } from '@angular/core';
import { animate } from '@angular/core';
import { stagger, query } from '@angular/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskModel, TaskGroupModel } from './task-group.model';
import { Input } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css'],
  providers: [],
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
  @Input() group: TaskGroupModel
  service: DashboardService

  constructor(service: DashboardService) {
    this.service = service
  }

  ngOnInit() {
  }

  getFinishedTasks() {
    return this.group.tasks.filter(task => task.done)
  }

  getUnfinishedTasks() {
    return this.group.tasks.filter(task => !task.done)
  }

  toggleTask(task: TaskModel) {
    task.done = !task.done
    this.service.setTaskDone(task, task.done)
  }
}
