import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http : HttpClient
  ) { }

  base_url = "http://localhost:3000/products"

  getProducts() : Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${this.base_url}`)
  }

  addProducts(data : Iproduct) : Observable<Iproduct>{
    return this.http.post<Iproduct>(`${this.base_url}`, data)
  }

  updateProducts(data : Iproduct) : Observable<Iproduct>{
    return this.http.put<Iproduct>(`${this.base_url}/${data.id}`, data)
  }

  detailProducts(id : any) : Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.base_url}/${id}`)
  }

  deleteProducts(id : any) : Observable<Iproduct>{
    return this.http.delete<Iproduct>(`${this.base_url}/${id}`)
  }
}
