import { product } from './../../shared/components/models/product.model';
import { Router } from '@angular/router';
import { ProductsService } from './../../shared/components/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products?: product[];

  constructor(private productsService: ProductsService, private router: Router) { }



  edit(id: string){
    this.productsService.getProductById(id).subscribe((res: any) => {
      this.productsService.product = res;
      this.router.navigate(['/edit']);
    });
  }

  delete(id: string) {
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    })
  }
}
