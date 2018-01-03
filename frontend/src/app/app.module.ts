import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { HomeService } from "./home/home.service";
import { MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatListModule, MatCheckboxModule, MatIconModule, MatDatepickerModule,
  MatDialogModule, MatNativeDateModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChatComponent} from './chat/chat.component';
import {CalendarService} from "./calendar/calendar.service";
import {CalendarPrototypeComponent} from "./calendar/calendar/calendar";
import {CalendarComponent} from "./calendar/calendar.component";
import { FileComponent } from "./file/file.component";
import { FileService } from "./file/file.service";
import { FileUploadModule } from 'ng2-file-upload';
import { CalendarDialogComponent } from './calendar-dialog/calendar-dialog.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TaskGroupComponent,
    DashboardComponent,
    ChatComponent,
    CalendarComponent,
    CalendarPrototypeComponent,
    FileComponent,
    CalendarDialogComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2DragDropModule.forRoot(),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    FileUploadModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    CalendarDialogComponent
  ],
  providers: [HomeService, CalendarService, FileService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
