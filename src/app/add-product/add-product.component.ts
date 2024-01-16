import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product = new Product();
  constructor(private productService:ProductService, private rutar:Router){}
  onSubmit(){
    this.saveProduct();
  }
  saveProduct(){
    this.productService.addProduct(this.product).subscribe(
      {
        next:(data)=> {
          this.goListProducts();
        },error:(error:any)=> {console.log()}
      }
    );
  }
  goListProducts(){
    this.rutar.navigate(['/products']);
  }
}
