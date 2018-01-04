import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from "./chat/chat.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { FileComponent } from "./file/file.component";
import {NotificationComponent} from "./notification/notification.component";
import { AppComponent } from "./app.component"

const projectRoutes: Routes = [
  {
    path: 'chat/:chat_person_id',
    component: ChatComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
    redirectTo: '/dashboard'
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
]

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'projects',
  //   component: ProjectComponent
  // },
  // {
  //   path: 'projects/:project_id',
  //   component: ProjectComponent,
  //   children: projectRoutes
  // }
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
    redirectTo: '/dashboard'
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
