import { Injectable } from '@angular/core'
import { ProjectModel } from './project-list.model'
import { AuthHttp } from 'angular2-jwt'

@Injectable()
export class ProjectListService {
  authHttp: AuthHttp

  constructor(authHttp: AuthHttp) {
    this.authHttp = authHttp
  }

  fetchProjects() {
    return this.authHttp.get('/api/projects')
      .toPromise()
      .then(result => result.json())
      .then(obj => Promise.resolve(obj.map(proj => new ProjectModel(proj.title, proj.description, proj.id))))
  }

  createProject(title: string, description: string, projects: ProjectModel[]) {
    return this.authHttp.post('/api/projects', { title: title, description: description })
      .toPromise()
      .then(result => result.json())
      .then(obj => {
        let project = new ProjectModel(obj.title, obj.description, obj.id)
        projects.push(project)
        return project
      })
  }

  inviteMembers(project: ProjectModel, emails: string[])  {
    return this.authHttp.post('/api/projects/' + String(project.id) + '/invite', emails).toPromise()
  }

  leaveProject(project: ProjectModel) {
    return this.authHttp.put('/api/projects/' + String(project.id) + '/leave', '').toPromise()
  }

  getProject(projectId: number) {
    return this.authHttp.get('/api/projects/' + String(projectId))
      .toPromise()
      .then(response => response.json())
      .then(obj => new ProjectModel(obj.title, obj.description, obj.id))
  }

  joinProject(project: ProjectModel) {
    return this.authHttp.put('/api/projects/' + String(project.id) + '/join', '').toPromise()
  }
}
