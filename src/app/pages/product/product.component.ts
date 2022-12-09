import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productHttpService:ProductHttpService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    //this.deleteProducts();
  }
  getProducts(){
    this.productHttpService.getAll().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getProduct(){
    this.productHttpService.getOne(9).subscribe(
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
    this.productHttpService.store().subscribe(
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
    this.productHttpService.update(9).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  deleteProducts(){
    const url = "https://api.escuelajs.co/api/v1/products/1";
    this.productHttpService.destroy(9).subscribe(
      response =>{
        console.log(response);
      }
    )
  }


}
