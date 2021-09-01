import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  currentCategory?: any;
  message = '';
  titulo= "";
  descripcion = "";
  id = 0;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.message = '';
      this.getCategory(this.route.snapshot.params.id);
      
    }

    getCategory(id: string): void {
      this.categoryService.get(id)
        .subscribe(
          data => {
            this.currentCategory = data.result;
            this.titulo = data.result.categoryName != undefined ? data.result.categoryName: ""
            this.descripcion = data.result.categoryDescription != undefined ? data.result.categoryDescription:  ""
            this.id = data.result.categoryId != undefined ? data.result.categoryId:  0
          },
          error => {
            console.log(error);
          });
    }

    updatePublished(status: boolean): void {
      const data = {
        title: this.currentCategory.categoryId,
        description: this.currentCategory.categoryDescription
      };

      this.message = '';

      this.categoryService.update(this.id, this.titulo, this.descripcion)
        .subscribe(
          response => {
            //this.currentCategory.published = status;
            console.log(response);
            this.message = response.message ? response.message : 'The status was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }

    updateCategory(): void {
      this.message = '';

      this.categoryService.update(this.id, this.titulo, this.descripcion)
        .subscribe(
          response => {
            console.log(response);
            this.message = response.message ? response.message : 'This tutorial was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }

    deleteCategory(): void {
      this.categoryService.delete(this.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/category']);
          },
          error => {
            console.log(error);
          });
    }

}
