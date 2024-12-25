import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ProductListComponent {
  fruits: any[] = [];

  constructor(private fruitService: FruitService, private cartService: CartService) {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
    });
  }

  addToCart(fruit: any) {
    this.cartService.addToCart(fruit);
  }
}
