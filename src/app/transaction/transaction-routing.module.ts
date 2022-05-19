import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { payInuxBill } from './inux-bill/inux-bill.component';
import { PayBillHomeComponent } from './pay-bill-home/pay-bill-home.component';
const routes: Routes = [
  {path: '', component: PayBillHomeComponent},
  {path: 'payBill', component: payInuxBill}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
