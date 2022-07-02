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
  ngOnInit(): void {
  }

}
