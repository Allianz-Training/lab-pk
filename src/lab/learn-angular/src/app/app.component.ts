import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'learn-angular';

  @ViewChild('productList')
  productList: ProductListComponent

  constructor() {}

  ngAfterViewInit(): void {
    this.productList.products.push({name: 'ส้มโอ', price: 111})
    this.productList.products.push({name: 'แตงโม', price: 222})
    this.productList.products.push({name: 'มะพร้่าวน้ำหอม', price: 333})
  }
}
