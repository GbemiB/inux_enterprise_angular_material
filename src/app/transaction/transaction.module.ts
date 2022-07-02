import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { RecieptComponent } from './reciept/reciept.component';
import { payInuxBill } from './inux-bill/inux-bill.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';

@NgModule({
  declarations: [
    payInuxBill,
    RecieptComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }
