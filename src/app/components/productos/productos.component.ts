import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { productos } from 'src/app/Interfaces/getProductos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  category ?: any;
  productos ? : any;
  currentCategory!: Category[];
  currentIndex = -1;
  currentProductos!: Product[];
  ProductosIndex = -1;
  title = '';


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  setActiveProductos(productos: productos, index: number): void {
    this.currentProductos = this.productos;
    this.ProductosIndex = index;
  }

  getProductos(): void{
    console.log("pro");
    this.categoryService.getAllProducts()
    .subscribe(
      data => {
        this.productos = data.collection;
        console.log(this.productos);
      },
      error => {
        console.log(error);
      });

  }

}
