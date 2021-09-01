import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ProdcutoDetailComponent } from './components/producto-detail/prodcuto-detail.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    AddProductoComponent,
    ProdcutoDetailComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],

  bootstrap: [AppComponent]
})
export class AppModule { }
