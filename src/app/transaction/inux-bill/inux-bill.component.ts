import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { RecieptComponent } from '../reciept/reciept.component';

@Component({
  selector: 'app-inux-bill',
  templateUrl: './inux-bill.component.html',
  styleUrls: ['./inux-bill.component.scss']
})
export class payInuxBill implements OnInit {
  firstFormGroup: FormGroup = new FormGroup({});;
  secondFormGroup: FormGroup = new FormGroup({});
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private notify: NotificationService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      destAffiliate: ['', Validators.required],
      receiveAccount: ['', Validators.required],
      senderAccount: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      product: ['', Validators.required],
      amount: ['', Validators.required],
      purpose: ['', Validators.required],
    });
  }

  performTransaction(): void {
    this.printReceipt();
  }


  printReceipt(): void {
    const dialogRef = this.dialog.open(RecieptComponent, {
      height: '800px',
      width: '1500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
