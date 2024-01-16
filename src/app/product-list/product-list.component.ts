import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports:[CommonModule]
})
export class ProductListComponent {
  products : Product[];
  constructor(private productService:ProductService, private rutar:Router){
    this.getProducts();
  }
  

  private  getProducts(){
    this.productService.getProductsList().subscribe(
      (data =>{
        this.products = data;
      })
    )
  }
  editProduct(id:number){
    this.rutar.navigate(['edit-product',id]);
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      {
        next:(data)=> this.getProducts(),
        error:(errors) => console.log(errors)
      }
    );
  }
}
