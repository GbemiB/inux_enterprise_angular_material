import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { RecieptComponent } from './reciept/reciept.component';
import { MaterialModule } from '../shared/material-module';
import { payInuxBill } from './inux-bill/inux-bill.component';

@NgModule({
  declarations: [
    payInuxBill,
    RecieptComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule,
  ]
})
export class TransactionModule { }
