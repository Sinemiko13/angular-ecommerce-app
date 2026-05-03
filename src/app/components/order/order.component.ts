import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, AfterContentChecked {

  order:OrderModel[] = [];

  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit(): void {

  }
  ngAfterContentChecked(): void {
    this.order = this.orderService.orders;
  }

}
