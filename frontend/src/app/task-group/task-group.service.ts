import { Injectable } from '@angular/core';
import { TaskModel, TaskGroupModel } from './task-group.model'

export class TaskGroupService {
  taskGroup : TaskGroupModel

  constructor() {
    this.taskGroup = new TaskGroupModel('untitled')
    this.taskGroup.addTask('Task1')
    this.taskGroup.addTask('Task3')
    this.taskGroup.addTask('Task5')
    this.taskGroup.addTask('Task3')
    this.taskGroup.addTask('Task2')
    this.taskGroup.addTask('Task3')
    this.taskGroup.addTask('Task3')
    this.taskGroup.addTask('Task4')
  }

  getFinishedTasks() {
    return this.taskGroup.finishedTasks
  }

  getUnfinishedTasks() {
    return this.taskGroup.unfinishedTasks
  }

  finishTask(task: TaskModel) {
    let index = this.taskGroup.unfinishedTasks.indexOf(task)
    if (index > -1) {
      task.finished = true
      this.taskGroup.finishedTasks.unshift(task)
      this.taskGroup.unfinishedTasks.splice(index, 1)
    }
  }

  undoFinishTask(task: TaskModel) {
    let index = this.taskGroup.finishedTasks.indexOf(task)
    if (index > -1) {
      task.finished = false
      this.taskGroup.unfinishedTasks.unshift(task)
      this.taskGroup.finishedTasks.splice(index, 1)
    }
  }
}
