import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(public snackBar: MatSnackBar) { }


  success(content: string, action: string | undefined) {
    this.snackBar.open(content, action, {
      duration: 20000,
      panelClass: ["success"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
  

  danger(content: string, action: string | undefined) {
    this.snackBar.open(content, action, {
      duration: 20000,
      panelClass: ["failed"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }


  info(content: string, action: string | undefined) {
    this.snackBar.open(content, action, {
      duration: 20000,
      panelClass: ["info"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
