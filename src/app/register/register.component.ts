import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FinishSignUpDialogComponent } from '../finish-sign-up-dialog/finish-sign-up-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedValue: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog(){
    const dialogRef = this.dialog.open(FinishSignUpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
