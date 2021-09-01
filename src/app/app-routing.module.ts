import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ProdcutoDetailComponent } from './components/producto-detail/prodcuto-detail.component';
import { ProductosComponent } from './components/productos/productos.component';



const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryDetailsComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: 'addProducto', component: AddProductoComponent},
  { path: 'Producto/:id', component: ProdcutoDetailComponent},
  { path: 'Producto', component: ProductosComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '**', component: CategoryListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
