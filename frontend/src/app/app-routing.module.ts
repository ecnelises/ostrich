import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { TaskGroupComponent } from './task-group/task-group.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ChatComponent } from "./chat/chat.component"
import { CalendarComponent } from "./calendar/calendar.component"
import { FileComponent } from "./file/file.component"
import { AppComponent } from "./app.component"
import { ProjectListComponent } from "./project-list/project-list.component"

const projectRoutes: Routes = [
  {
    path: 'chat/:chat_person_id',
    component: ChatComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'files',
    component: FileComponent
  },
  {
    path: 'files/:file_id',
    component: FileComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'project-detail/:project_id', component: DashboardComponent,
    children: projectRoutes
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
