import UUID from 'node-uuid'

export class TaskModel {
  uuid: string
  finished: boolean
  title: string
  content: string

  constructor(title: string, content = '') {
    this.uuid = UUID.v4()
    this.finished = false
    this.title = title
    this.content = content
  }
}

export class TaskGroupModel {
  finishedTasks: Array<TaskModel>
  unfinishedTasks: Array<TaskModel>
  name: string
  
  constructor(name: string) {
    this.finishedTasks = []
    this.unfinishedTasks = []
    this.name = name
  }

  addTask(title: string) {
    this.unfinishedTasks.push(new TaskModel(title))
  }
}
