import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from "@angular/forms";
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { Component } from '@angular/core/src/metadata/directives';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', component: ProductDetailComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo:'welcome', pathMatch:'full'}
      ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
