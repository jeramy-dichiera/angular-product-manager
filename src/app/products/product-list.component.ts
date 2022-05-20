import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(this._listFilter);
    console.log(this.filteredProducts.length);
    
  }
  filteredProducts: IProduct[] = [];
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  products: IProduct[] = [
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

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = '';
  }
}