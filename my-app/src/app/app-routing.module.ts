import { AddProductsComponent } from './page/add-products/add-products.component';
import { ProductsComponent } from './page/products/products.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './page/list-products/list-products.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  
  {path: 'products', component: ProductsComponent, children: [
    {path: '', component: ListProductsComponent},
    {path: 'add', component: AddProductsComponent},
    {path: ':idd/edit', component: AddProductsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
