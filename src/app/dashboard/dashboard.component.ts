import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogFunctionComponent } from './dialog-function/dialog-function.component';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public currentUser;
  display = false;
  //  users: User[] = [];
  constructor(public dialog: MatDialog) {
    this.currentUser = localStorage.getItem('currentUser');
  }
  ngOnInit() {}
  logout() {
    console.log('in logout', localStorage.getItem('currentUser'));
    localStorage.removeItem('currentUser');
  }
  myEvent(event) {
    console.log(event);
  }

    showDialog() {
        this.display = true;
    }

  openDialog(): void {
    console.log("in open dialog");
    console.log('hello', DialogOverviewExampleDialog);
    console.log("in open dialog");
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}








