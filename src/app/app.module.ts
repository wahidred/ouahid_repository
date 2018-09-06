import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { productListComponent } from './products/productListComponent';


@NgModule({
  declarations: [
    AppComponent,
    productListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
