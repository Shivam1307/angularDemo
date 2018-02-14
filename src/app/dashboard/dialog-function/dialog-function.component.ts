import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-function',
  templateUrl: './dialog-function.component.html',
  styleUrls: ['./dialog-function.component.css']
})
export class DialogFunctionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogFunctionComponent>) { }

  ngOnInit() {
  }

}
