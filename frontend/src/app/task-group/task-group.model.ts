export class TaskModel {
  done: boolean
  content: string
  id: number
  createdAt: Date
  creatorId: number
  groupId: number

  constructor(id: number, content: string, done: boolean,
      createdAt: Date, creatorId: number, groupId: number) {
    this.id = id
    this.done = done
    this.content = content
    this.createdAt = createdAt
    this.creatorId = creatorId
    this.groupId = groupId
  }
}

export class TaskGroupModel {
  name: string
  tasks: TaskModel[]
  id: number
  
  constructor(id: number, name: string, tasks: TaskModel[]) {
    this.tasks = tasks
    this.name = name
    this.id = id
  }
}
