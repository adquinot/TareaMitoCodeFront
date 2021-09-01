import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';
import { ICategory } from 'src/app/Interfaces/ResponseCategory';
import { CategoriaP } from 'src/app/Interfaces/CategoriaParam';
import { productos } from 'src/app/Interfaces/getProductos';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category ?: any;
  productos ? : any;
  currentCategory!: Category[];
  currentIndex = -1;
  currentProductos!: Product[];
  ProductosIndex = -1;
  title = '';

  constructor(private categoryService: CategoryService) { 
    this.getProductos();
    this.retrieveCategory();
    
  }

  ngOnInit(): void {
    
  }

  retrieveCategory(): void {
    
    this.categoryService.getAll()
      .subscribe(
        data => {
          console.log(data.collection);
          this.category = data.collection;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCategory();
    this.currentCategory=this.category;
    this.currentIndex = -1;
  }

  setActiveCategory(category: Category, index: number): void {
    this.currentCategory = this.category;
    this.currentIndex = index;
  }

  setActiveProductos(productos: productos, index: number): void {
    this.currentProductos = this.productos;
    this.ProductosIndex = index;
  }

  removeAllCategory(cat?: number): void {
    this.categoryService.deleteAll(cat)
      .subscribe(
        response => {
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentCategory = this.category;
    this.currentIndex = -1;

    this.categoryService.findByTitle(this.title)
      .subscribe(
        data => {
          this.category = data.collection;
          console.log(data);
        },
        error => {
          console.log(error);
        });


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
