import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'learn-angular';

  @ViewChild('productList')
  productList: ProductListComponent

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
