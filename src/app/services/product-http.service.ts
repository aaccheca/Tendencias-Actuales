import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { createProduct, ProductModel, updateProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

   /* ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    //this.deleteProducts();
  }*/

  readonly API_URL:string = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient:HttpClient) { }
  
  getAll(){
    const url = `${this.API_URL}`;
    return this.httpClient.get(url)
  }

  getOne(id:number){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url)
  }

  store(product: createProduct){
    const data ={
      id:1,
      title:"Lapiz",
      price:20,
      description:"Utiles Escolares - Angel Checa",
      categoryId:1,
      images:[""],
    }
    const url = `${this.API_URL}`;
    return this.httpClient.post(url,data)
  }

  update(id:number, product:updateProduct){
    const data={
      title:"Calculadora",
      price:34,
      description:"Utiles Escolares - Angel Checa"
    }
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url, data)
  }

  destroy(id:number){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete(url)
  }
  
}
