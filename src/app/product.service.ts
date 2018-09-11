import { Injectable } from "@angular/core";
import { IProduct } from "./IProduct";
import { Observable, throwError } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({providedIn : 'root'})
export class ProductService {

productUrl: string  ='api/products/products.json'; 
constructor(private http : HttpClient){

}

getProducts (): Observable<IProduct[]> {
   return this.http.get<IProduct[]>(this.productUrl)
   .pipe(tap(x => console.log('ALL :' + JSON.stringify(x)))
   ,catchError(this.handleError));   
}

private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
        errorMessage = `an error occured ! ${err.error.message}`;
    }else{
        errorMessage = `server returned code : ${err.status}, error message is : ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
}














 // [{
    //     "productId": 2,
    //     "productName": "Garden Cart",
    //     "productCode": "GDN-0023",
    //     "releaseDate": "March 18, 2016",
    //     "description": "15 gallon capacity rolling garden cart",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //   },
    //   {
    //     "productId": 5,
    //     "productName": "Hammer",
    //     "productCode": "TBX-0048",
    //     "releaseDate": "May 21, 2016",
    //     "description": "Curved claw steel hammer",
    //     "price": 8.9,
    //     "starRating": 4.8,
    //     "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //   }];