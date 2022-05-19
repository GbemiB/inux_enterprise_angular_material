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
  public dataSource: MatTableDataSource<Object> | any;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator:
    | MatPaginator
    | undefined;
  displayedColumns: string[] = [
    'referenceNumber',
    'product',
    'sendAff',
    'receiveAff',
    'sendAmt',
    'receiveAmt',
    'status',
    'action',
  ];
  isTableHasData?: boolean;
  transactions = [
    {
      referenceNumber: 'RTC46593939',
      product: 'ACCTOACC',
      sendAff: 'Ecobank Ghana',
      receiveAff: 'Ecobank Nigeria',
      sendAmt: '200',
      receiveAmt: '100',
      status: 'APPROVED'
    },
    {
      referenceNumber: 'RTC46493939',
      product: 'ACCTOACC',
      sendAff: 'Ecobank Ghana',
      receiveAff: 'Ecobank Nigeria',
      sendAmt: '200',
      receiveAmt: '100',
      status: 'APPROVED'
    },
    {
      referenceNumber: 'RTC46593939',
      product: 'ACCTOACC',
      sendAff: 'Ecobank Ghana',
      receiveAff: 'Ecobank Nigeria',
      sendAmt: '200',
      receiveAmt: '100',
      status: 'PENDING'
    },
    {
      referenceNumber: 'RTC46593939',
      product: 'ACCTOACC',
      sendAff: 'Ecobank Ghana',
      receiveAff: 'Ecobank Nigeria',
      sendAmt: '200',
      receiveAmt: '100',
      status: 'REJECTED'
    },
    {
      referenceNumber: 'RTC46593939',
      product: 'ACCTOACC',
      sendAff: 'Ecobank Ghana',
      receiveAff: 'Ecobank Nigeria',
      sendAmt: '200',
      receiveAmt: '100',
      status: 'PENDING'
    },
  ];

  constructor(public dialog: MatDialog, public restclient: RestclientService) {}

  ngOnInit(): void {
    this.fetchAllTransactions();
  }

  fetchAllTransactions(): void {
    this.dataSource = this.transactions;
    // this.dataSource = new MatTableDataSource<object>();
    this.isTableHasData = true;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.filteredData.length > 0) {
      this.isTableHasData = true;
    } else {
      this.isTableHasData = false;
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  printReceipt(element: any): void {
    const billerInformation: Object = element;

    const dialogRef = this.dialog.open(RecieptComponent, {
      // Dynamic increase in height of modal
      height: '800px',
      width: '1500px',
      data: { biller: billerInformation },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.customerForm.enable();
      // this.kycComplete = false;
    });
  }

  performNewTransaction(): void {
    const dialogRef = this.dialog.open(PayBillHomeComponent, {
      // Dynamic increase in height of modal
      height: '40rem',
      width: '50rem',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.customerForm.enable();
      // this.kycComplete = false;
    });
  }
}

