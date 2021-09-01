import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-prodcuto-detail',
  templateUrl: './prodcuto-detail.component.html',
  styleUrls: ['./prodcuto-detail.component.css']
})
export class ProdcutoDetailComponent implements OnInit {
  message = '';
  productName = "";
  categoryId = 0;
  productPrice = 0;
  id= 0;
  category ?: any;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) {
      
     }

  ngOnInit(): void {
    this.message = '';
    
    this.getProductoD(this.route.snapshot.params.id);
    
  }


  getProductoD(id: string): void {
    
    this.categoryService.getProductoD(id)
      .subscribe(
        data => {
         console.log(data);
         this.productName= data.result.productName;
        this.categoryId = data.result.categoryId;
        this.productPrice = data.result.productPrice;
        this.id = data.result.productId
        },
        error => {
          console.log(error);
        });
  }

  updateCategory(){
    this.message = '';

    this.categoryService.updateP(this.id, this.productName, this.categoryId, this.productPrice)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
  }
  deleteCategory(){
    this.categoryService.deleteP(this.id)
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
