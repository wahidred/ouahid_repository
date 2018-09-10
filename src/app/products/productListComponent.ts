import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']

})


export class productListComponent implements OnInit{
 

 pageTitle = "OUAHID";    
  imageWidth = 50;
  imageMargin = 2;
  showImage :boolean = false;
  filteredProducts: IProduct[];
  products : IProduct[] = [ ];

  private _listFilter: string;

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = value ? this.performFilter(value) : this.products;
  }

  
   

  

  constructor(private productService : ProductService){
   
  }
  toogleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(value: string): IProduct[]{
    value = value.toLocaleUpperCase();
   return this.products.filter((toto: IProduct) => toto.productName.toLocaleUpperCase().indexOf(value) !== -1);
  }

  onNotify(message: string): void{
    this.pageTitle = message;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
   }
}