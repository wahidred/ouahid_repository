import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']

})


export class productListComponent implements OnInit{
  ngOnInit(): void {
   console.log('mon objet est passe par on init interface');
  }

 pageTitle = "OUAHID";    
  imageWidth = 50;
  imageMargin = 2;
  showImage :boolean = false;
  
  private _listFilter: string;

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = value ? this.performFilter(value) : this.products;
  }

  filteredProducts: IProduct[];
  products : IProduct[] = [ 
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      }

  ];

  constructor(){
    this.filteredProducts = this.products;
    this._listFilter = 'cart' ;
  }
  toogleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(value :string) : IProduct[]{
    value = value.toLocaleUpperCase();
   return this.products.filter((toto : IProduct) => toto.productName.toLocaleUpperCase().indexOf(value) !== -1);
  }
}