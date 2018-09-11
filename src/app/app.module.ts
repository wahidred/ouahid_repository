import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { productListComponent } from './products/productListComponent';
import { ConvertToSpacePipe } from './shared/convert-to-spaces-pipe';
import { StarComponent } from './shared/star.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacePipe,
    StarComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
