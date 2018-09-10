import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { productListComponent } from './products/productListComponent';
import { ConvertToSpacePipe } from './shared/convert-to-spaces-pipe';
import { StartComponent } from './shared/start.component';


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacePipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
