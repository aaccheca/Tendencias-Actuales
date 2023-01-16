import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/models/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products:ProductModel[] = [];
   selectedProduct: UpdateProductDto = {};
  constructor(private productHttpService:ProductHttpService) {
   this.editarProduct();
  }
  
  ngOnInit(): void {    
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    this.deleteProduct(id);
  }

  getProducts(){
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe(
      response =>{
        this.products = response;
        console.log(response);
      }
    )
  }
  getProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/8";
    return this.productHttpService.getOne(2).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  createProduct(){
    const data = {
      title: 'esfero',
      price: 45,
      description: 'utiles escolares',
      categoryId: 1,
      images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
    }
    this.productHttpService.store(data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  updateProduct(){
    const data = {
      title: 'zapatos',
      price: 60,
      description: 'calzado',
    }
    this.productHttpService.update(1, data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  editarProduct(){
    this.selectedProduct = this.products.filter(product => product.id != id); 
  }
  
  deleteProduct(id: ProductModel['id']){
    this.productHttpService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(product => product.id != id); 
        console.log(response);
      }
    )
  }
}