//Auto generate, Use DI
import { Component, inject } from '@angular/core';
//For use sevice
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //New parameter for product data
  products: any = [];
  //DI
  private productService = inject(ProductService);
  //Fetch all products from service(API)
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
