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
}
