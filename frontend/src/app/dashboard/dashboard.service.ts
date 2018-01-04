import { Injectable } from '@angular/core'
import { TaskModel, TaskGroupModel } from '../task-group/task-group.model'
import { AuthHttp } from 'angular2-jwt'
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { ProjectModel } from '../project-list/project-list.model';

@Injectable()
export class DashboardService {
  authHttp: AuthHttp

  private serverUrl = 'http://127.0.0.1:8080/ws'
  private title = 'WebSockets chat';
  private stompClient;

  constructor(authHttp: AuthHttp) {
    this.authHttp = authHttp;
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
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
    let Message = {
      subjectId: localStorage.getItem('subjectId'),
      sender: localStorage.getItem('nickname'),
      senderId: localStorage.getItem('userId'),
      message: "完成了一项任务~"
    };
    this.stompClient.send('/app/notification' , {}, JSON.stringify(Message));
    return this.authHttp.put('/api/tasks/' + String(task.id) + '/toggle', { status: status }).toPromise()
  }

  addTask(content: string, group: TaskGroupModel) {
    let that = this;
    return this.authHttp.post('/api/task-groups/' + String(group.id) + '/tasks', { content: content })
      .toPromise()
      .then(response => response.json())
      .then(obj => {
        let task = new TaskModel(obj.id, obj.content, obj.done, obj.createdAt, obj.creatorId, obj.groupId)
        group.tasks.unshift(task)
        let Message = {
          subjectId: localStorage.getItem('subjectId'),
          sender: localStorage.getItem('nickname'),
          senderId: localStorage.getItem('userId'),
          message: "创建了新的任务~"
        };
        that.stompClient.send('/app/notification' , {}, JSON.stringify(Message));
        return task
      })
  }

  addGroup(name: string, projectId: number, groups: TaskGroupModel[]) {
    let that = this;
    return this.authHttp.post('/api/projects/' + String(projectId) + '/groups', { name: name })
      .toPromise()
      .then(response => response.json())
      .then(obj => {
        let group = new TaskGroupModel(obj.id, obj.title, [])
        groups.push(group)
        let Message = {
          subjectId: localStorage.getItem('subjectId'),
          sender: localStorage.getItem('nickname'),
          senderId: localStorage.getItem('userId'),
          message: "创建了新的任务组~"
        };
        that.stompClient.send('/app/notification' , {}, JSON.stringify(Message));
      })
  }
}
