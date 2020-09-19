import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productSubj: Subscription;
  public arrProduct: Product[];
  public headerTable: string[];
  public spinner: boolean;
  constructor(
    private _productService: ProductService
  ) {
    this.headerTable = ['Number', 'Name', 'Date', 'Sku', 'Weight', 'Height', 'Width', 'Origin', 'Minimum', 'Delay']
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.spinner = true;
    this._productService.getProducts$().subscribe(
      (data) => {
        this.arrProduct = [];
        data.forEach((productData: any) => {
          this.arrProduct.push({
            id: productData.payload.doc.id,
            data: productData.payload.doc.data()
          });
        })
        this.spinner = false;
      });
  }
  ngOnDestroy() {
    this.productSubj ? this.productSubj.unsubscribe() : '';
  }
}
