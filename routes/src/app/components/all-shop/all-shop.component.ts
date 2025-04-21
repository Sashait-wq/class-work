import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-shop',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './all-shop.component.html',
  styleUrl: './all-shop.component.scss',
})
export class AllShopComponent implements OnInit {
  shopOne = new FormControl<string | null>(null);

  constructor(private r: Router) {}

  ngOnInit(): void {
    this.shopOne.valueChanges.subscribe((value) => {
      this.r.navigate(['allShop', value]);
    });
  }
}
