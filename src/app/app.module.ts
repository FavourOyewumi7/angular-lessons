import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductComponent} from './products/products.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpaces} from './shared/converttospaces.pipe'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpaces

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
