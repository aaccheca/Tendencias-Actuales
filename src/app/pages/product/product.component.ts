import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    //this.deleteProducts();
  }
  getProducts(){
    this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getProduct(){
    this.httpClient.get("https://api.escuelajs.co/api/v1/products/14").subscribe(
      response => {
        console.log(response);
      }
    );
  }

  createProduct(){
    const data ={
      id:1,
      title:"Lapiz",
      price:20,
      description:"Utiles Escolares - Angel Checa",
      categoryId:1,
      images:[""],
    }
    const url = "https://api.escuelajs.co/api/v1/products"
    this.httpClient.post(url,data).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  updateProduct(){
    const data={
      title:"Calculadora",
      price:34,
      description:"Utiles Escolares - Angel Checa"
    }
    const url = "https://api.escuelajs.co/api/v1/products/14";
    this.httpClient.put(url, data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  deleteProducts(){
    const url = "https://api.escuelajs.co/api/v1/products/1";
    this.httpClient.delete(url).subscribe(
      response =>{
        console.log(response);
      }
    )
  }


}
