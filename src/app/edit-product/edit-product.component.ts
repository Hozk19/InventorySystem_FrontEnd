import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {
  product: Product = new Product();
  id:number;

  constructor(private productService:ProductService, private route:ActivatedRoute,
    private rutar:Router){
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      {
        next:(data)=> this.product = data,
        error: (errors:any)=> console.log(errors)
      }
    );
  }
  onSubmit(){
    this.saveProduct();
  }
  saveProduct(){
    this.productService.updateProduct(this.id,this.product).subscribe(
      {
        next:(data)=>this.showProductList(),
        error:(errors)=> console.log(errors)
      }
    );
  }
  showProductList(){
    this.rutar.navigate(['/products']);
  }
}
