import { Component, OnInit, ViewChild } from '@angular/core';
import { RestclientService } from 'src/app/services/restclient/restclient.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RecieptComponent } from '../reciept/reciept.component';

@Component({
  selector: 'app-pay-bill-home',
  templateUrl: './pay-bill-home.component.html',
  styleUrls: ['./pay-bill-home.component.scss'],
})
export class PayBillHomeComponent implements OnInit {
  ngOnInit(): void {
  }
}

