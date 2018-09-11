import { Component, OnInit, EventEmitter } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";


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
  private _listFilter: string;
  errorMessage : string;
  constructor(private _productService: ProductService){
  }

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = value ? this.performFilter(value) : this.products;
  }

  filteredProducts: IProduct[];
  products : IProduct[] = [];
  observableProduct: Observable<IProduct[]>=new Observable<IProduct[]>();

  toogleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(value :string) : IProduct[]{
    value = value.toLocaleUpperCase();
   return this.products.filter((toto : IProduct) =>
    toto.productName.toLocaleUpperCase().indexOf(value) !== -1);
  }
  onNotify(message : string ) : void{
    this.pageTitle = message;
  }

  ngOnInit(): void {
    this._productService.getProducts().
    subscribe(x => {
      this.products = x;
      this.filteredProducts = this.products;
    }
      , error => this.errorMessage = <any>error);
    
   }
}