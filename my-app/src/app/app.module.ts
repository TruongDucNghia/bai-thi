import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductsComponent } from './page/products/products.component';
import { AddProductsComponent } from './page/add-products/add-products.component';
import { ListProductsComponent } from './page/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    AddProductsComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
