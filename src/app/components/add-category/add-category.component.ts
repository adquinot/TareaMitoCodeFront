import { Component, OnInit } from '@angular/core';
import {  CategoriaP } from 'src/app/Interfaces/CategoriaParam';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category = {
    categoryId: 0,
    categoryDescription: ''

  };
  submitted = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  saveCategory(): void {
    const data: CategoriaP = {
      name: this.category.categoryId,
      description: this.category.categoryDescription
    };
console.log(data);
    this.categoryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {
      categoryId: 0,
      categoryDescription: ''
    };
  }
}
