import { Component } from '@angular/core'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = [
    {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "CODE-123",
    "releaseDate": "March 18, 2022",
    "description": "A big garden cart",
    "price": 39.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 3,
      "productName": "Hammer",
      "productCode": "CODE-456",
      "releaseDate": "March 21, 2022",
      "description": "A big hammer",
      "price": 8.99,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];
}