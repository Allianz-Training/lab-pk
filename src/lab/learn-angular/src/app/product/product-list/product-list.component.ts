import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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

  constructor() {
    this.products = []
  }

  ngOnInit(): void {
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
