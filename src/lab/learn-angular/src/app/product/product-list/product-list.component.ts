import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]

  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>

  constructor(private backendService: BackendService) {
    // this.products = []
  }

  ngOnInit(): void {
    this.products = this.backendService.getProducts()
  }

  selectedProduct(productComponent: ProductItemComponent): void {
    alert(`Product ${productComponent.product.name} selected`)
    this.productItems.forEach(p => {
      p.isSelected = false
    })
    productComponent.isSelected = true
    console.log(productComponent.isSelected)
  }

}
