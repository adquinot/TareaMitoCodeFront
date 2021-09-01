import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/ResponseCategory';
import { Product } from 'src/app/models/product.model';
import { ProductAdd } from 'src/app/models/ProductosAdd';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  category ?: any;
  orders = 0;
  index = 0;
  productos: ProductAdd = {
    productName: "",
    categoryId: 0,
    productPrice: 0,
    productEnabled: true,
    

  };
  submitted = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.retrieveCategory();
  }

  retrieveCategory(): void {
    
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.category = data.collection;
        },
        error => {
          console.log(error);
        });
  }

  newProducto(): void {
    this.submitted = false;
    
    this.productos = {
      productName: "",
      categoryId: 0,
      productPrice: 0,
      productEnabled: true,
    };
  }

  saveProducto(): void {
    
    const data: ProductAdd = {
      productName: this.productos.productName,
      categoryId: this.index,
      productPrice: this.productos.productPrice,
      productEnabled: true
    };
    
    console.log(data);
    console.log(this.orders);
      this.categoryService.createProducto(data)
      .subscribe(
        response => {
          console.log(data);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
