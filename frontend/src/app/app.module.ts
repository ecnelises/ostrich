import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { HomeService } from "./home/home.service";
import { MatToolbarModule, MatButtonModule, MatInputModule,
  MatFormFieldModule, MatCardModule, MatListModule, MatSelectModule,
  MatCheckboxModule, MatIconModule, MatDatepickerModule,
  MatDialogModule, MatNativeDateModule, MatSnackBarModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { ChatComponent} from './chat/chat.component';
import { CalendarService} from "./calendar/calendar.service";
import { CalendarPrototypeComponent } from "./calendar/calendar/calendar";
import { CalendarComponent } from "./calendar/calendar.component";
import { FileComponent } from "./file/file.component";
import { FileService } from "./file/file.service";
import { FileUploadModule } from 'ng2-file-upload';
import { CalendarDialogComponent } from './calendar-dialog/calendar-dialog.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {ChatService} from "./chat/chat.service";
import { MatMenuModule, MatProgressSpinnerModule, MatTabsModule } from '@angular/material'
import { DashboardComponent, DashboardNewDialogComponent, DashboardNewDialogGroupComponent } from './dashboard/dashboard.component'
import { ProjectListComponent, NewProjectDialogComponent } from './project-list/project-list.component'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { ProjectListService } from './project-list/project-list.service'
import { AuthModule } from './auth.module'
import {DashboardService} from "./dashboard/dashboard.service";
import { MatTooltipModule } from '@angular/material/tooltip'

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
    NotificationComponent,
    ProjectListComponent,
    NavigationBarComponent,
    DashboardNewDialogComponent,
    DashboardNewDialogGroupComponent,
    NewProjectDialogComponent,
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
    MatDialogModule,
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
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    HttpModule,
    MatProgressBarModule,
    MatSelectModule,
    MatMenuModule,
    AuthModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  providers: [
    DashboardService,
    HomeService,
    CalendarService,
    FileService,
    ChatService,
    LoginService,
    ProjectListService
  ],
  entryComponents: [
    DashboardNewDialogComponent,
    CalendarDialogComponent,
    DashboardNewDialogGroupComponent,
    NewProjectDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
