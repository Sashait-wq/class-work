import { Component, Input } from '@angular/core';
import { Product } from '../../../global-table/global-table.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
})
export class PriceComponent {
  @Input() data!: Product;
}
