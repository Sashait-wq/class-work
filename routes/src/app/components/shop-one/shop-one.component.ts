import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  TableConfig,
  GlobalTableComponent,
  Product,
} from '../global-table/global-table.component';
import { PriceComponent } from './columns/price/price.component';

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
    inStock: true,
  },
  { id: 2, name: 'Chair', category: 'Furniture', price: 150, inStock: false },
  { id: 3, name: 'Pen', category: 'Office', price: 2.5, inStock: true },
  { id: 4, name: 'Notebook', category: 'Office', price: 5.0, inStock: true },
  {
    id: 5,
    name: 'Smartphone',
    category: 'Electronics',
    price: 800,
    inStock: false,
  },
  { id: 6, name: 'Table', category: 'Furniture', price: 300, inStock: true },
  {
    id: 7,
    name: 'Headphones',
    category: 'Electronics',
    price: 100,
    inStock: true,
  },
  {
    id: 8,
    name: 'Backpack',
    category: 'Accessories',
    price: 60,
    inStock: true,
  },
  {
    id: 9,
    name: 'Water Bottle',
    category: 'Accessories',
    price: 20,
    inStock: false,
  },
  { id: 10, name: 'Mouse', category: 'Electronics', price: 25, inStock: true },
];
@Component({
  selector: 'app-shop-one',
  templateUrl: './shop-one.component.html',
  imports: [MatTableModule, GlobalTableComponent],
  styleUrls: ['./shop-one.component.css'],
})
export class ShopOneComponent {
  product = products;

  tableConfig: TableConfig = {
    columns: [
      {
        name: 'id',
        label: 'Id',
      },
      {
        name: 'name',
        label: 'Name',
      },
      {
        name: 'category',
        label: 'Category',
      },
      {
        name: 'price',
        label: 'Price',
        component: PriceComponent,
      },
      {
        name: 'inStock',
        label: 'InStock',
      },
    ],
  };
}
