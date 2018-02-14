import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './home/employee/employee.component';
import { LondonComponent } from './home/employee/london/london.component';
import { ParisComponent } from './home/employee/paris/paris.component';
import { TokyoComponent } from './home/employee/tokyo/tokyo.component';
import { AddBtnComponent } from './add-btn/add-btn.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/employee/register/register.component';
import { DashboardComponent, DialogOverviewExampleDialog } from './dashboard/dashboard.component';
import { Router } from '@angular/router/src/router';
import { HomeComponent } from './home/home.component';
import { DialogFunctionComponent } from './dashboard/dialog-function/dialog-function.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { AboutComponent } from './dashboard/about/about.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService, SharedModule } from 'primeng/primeng';
import { ContactComponent } from './dashboard/contact/contact.component';
const approotRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent}
];
const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  children: [
              {path: '', redirectTo: 'london', pathMatch: 'full'},
              { path: 'london', component: LondonComponent },
              { path: 'paris', component: ParisComponent },
              { path: 'tokyo', component: TokyoComponent },
              { path: 'login', component: LoginComponent},
              { path: 'register', component: RegisterComponent},
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
    {path: '', redirectTo: 'homedashboard', pathMatch: 'full'},
    {path: 'homedashboard', component: HomeDashboardComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
  ]}
];
const routeDashboard: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent , EmployeeComponent, LondonComponent, ParisComponent, TokyoComponent, AddBtnComponent, LoginComponent, RegisterComponent,
     DashboardComponent,
     HomeComponent,
     HomeDashboardComponent,
     AboutComponent,
     DialogFunctionComponent,
     DialogOverviewExampleDialog,
     ContactComponent,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule , HttpModule , BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ), FormsModule, MatDialogModule, ConfirmDialogModule, DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent, AddBtnComponent]
})
export class AppModule { }
