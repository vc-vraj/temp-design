import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  productsCategories = [
    {
      type: "Royal",
      items: 200 
    },
    {
      type: "Lemon Grass",
      items: 165 
    },
    {
      type: "Tea",
      items: 180 
    },
    {
      type: "Original",
      items: 120 
    },
    {
      type: "Strong 2x",
      items: 250 
    }
  ]
}
