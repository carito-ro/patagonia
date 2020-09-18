import { HardcodeService } from '../services/hardcode.service';
import { Product } from '../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public arrProduct: Product[];
  public headerTable: string[];

  constructor(
    private _hardcodeService: HardcodeService,
  ) {
    this.headerTable = ['Number', 'Name', 'Date', 'Sku', 'Weight', 'Height', 'Width', 'Origin', 'Minimum', 'Delay']
    this.arrProduct = this._hardcodeService.products;
  }

  ngOnInit(): void {

  }

}
