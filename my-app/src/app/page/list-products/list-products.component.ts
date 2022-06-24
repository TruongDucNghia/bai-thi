import { ProductsService } from './../../services/products.service';
import { Iproduct } from './../../model/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  data !: Iproduct[]

  constructor(
    private ProductsService : ProductsService
  ) { 
    this.ProductsService.getProducts().subscribe(data =>{
      this.data = data
    })
  }

  ngOnInit(): void {
  }

  onDelete(id : any){
    const action = window.confirm('Ban co chac muon xoa hay khong ?')

    if(action){
      this.ProductsService.deleteProducts(id).subscribe(data =>{
        alert('Xoa san pham thanh cong !')
        this.data = this.data.filter(item => item.id !== id)
      })
    }
  }

}
