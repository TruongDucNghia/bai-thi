import { Iproduct } from './../../model/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  data : Iproduct = {
    name: "",
    price: 0,
    img: "",
    desc: ""
  }

  constructor(
    private ProductsService : ProductsService,
    private router : Router,
    private ActivatedRoute : ActivatedRoute
  ) { 
    if(this.id){
      this.ProductsService.detailProducts(this.id).subscribe(data =>{
        this.data = data
      })
    }
  }

  id = this.ActivatedRoute.snapshot.paramMap.get('idd')

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.id){
      this.ProductsService.updateProducts(this.data).subscribe(data =>{
        alert('Update thanh cong !')
        this.router.navigateByUrl('products')
      })
    }else{
      this.ProductsService.addProducts(this.data).subscribe(data =>{
        alert('add thanh cong !')
        this.router.navigateByUrl('products')
      })
    }
  }

}
