import { Injectable } from '@angular/core'
import { TaskModel, TaskGroupModel } from '../task-group/task-group.model'
import { AuthHttp } from 'angular2-jwt'

@Injectable()
export class DashboardService {
  authHttp: AuthHttp

  constructor(authHttp: AuthHttp) {
    this.authHttp = authHttp
  }

  fetchGroups(projectId: number) {
    return this.authHttp.get('/api/projects/' + String(projectId) + '/groups')
      .toPromise()
      .then(response => response.json())
      .then(obj => obj.map(
        group => new TaskGroupModel(group.id, group.title, group.tasks.map(
            task => new TaskModel(task.id, task.content, task.done, task.createdAt, task.creatorId, task.groupId)
          )
        )
      ))
  }

  setTaskDone(task: TaskModel, status: boolean) {
    return this.authHttp.put('/api/tasks/' + String(task.id) + '/toggle', {status: status}).toPromise()
  }
}
