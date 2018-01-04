import { Injectable } from '@angular/core'
import { TaskModel, TaskGroupModel } from '../task-group/task-group.model'
import { AuthHttp } from 'angular2-jwt'
import { ProjectModel } from '../project-list/project-list.model';

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
    return this.authHttp.put('/api/tasks/' + String(task.id) + '/toggle', { status: status }).toPromise()
  }

  addTask(content: string, group: TaskGroupModel) {
    return this.authHttp.post('/api/task-groups/' + String(group.id) + '/tasks', { content: content })
      .toPromise()
      .then(response => response.json())
      .then(obj => {
        let task = new TaskModel(obj.id, obj.content, obj.done, obj.createdAt, obj.creatorId, obj.groupId)
        group.tasks.unshift(task)
        return task
      })
  }

  addGroup(name: string, projectId: number, groups: TaskGroupModel[]) {
    return this.authHttp.post('/api/projects/' + String(projectId) + '/groups', { name: name })
      .toPromise()
      .then(response => response.json())
      .then(obj => {
        let group = new TaskGroupModel(obj.id, obj.title, [])
        groups.push(group)
      })
  }
}
