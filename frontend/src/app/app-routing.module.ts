import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChatComponent} from "./chat/chat.component";
import {CalendarComponent} from "./calendar/calendar.component";
import { FileComponent } from "./file/file.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
  path: 'file',
  component: FileComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
