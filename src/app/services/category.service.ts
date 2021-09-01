import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../Interfaces/ResponseCategory';
import { CategoriaP } from '../Interfaces/CategoriaParam';
import { VerCategoria } from '../Interfaces/VerCategoria';
import { productos } from '../Interfaces/getProductos';
import { ProductAdd } from '../models/ProductosAdd';
import { Product } from '../models/product.model';
import { ProR } from '../Interfaces/ProductRespons';

// const baseUrl = 'https://localhost:5001/api/v1/Category';
const baseUrl = 'https://10.48.209.166:5001/api/v1/Category';
const ProdUrl = 'https://10.48.209.166:5001/api/v1/Product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICategory> {

    let parametros = new HttpParams();
        parametros = parametros.append('filter', '');
        parametros = parametros.append('page', 1);
        parametros = parametros.append('rows', 100)
        
    return this.http.get<ICategory>(baseUrl+'?' + parametros);
  }

  get(id: any): Observable<VerCategoria> {
    return this.http.get<VerCategoria>(`${baseUrl}/${id}`);
  }

  create(data: CategoriaP): Observable<any> {
    let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json'); 
        
    return this.http.post(baseUrl, data);
  }

  update(id: number, titulo: string, descripcion: string): Observable<any> {
    const data = {
      name: titulo,
      description: descripcion
    };

    
    let headers = new HttpHeaders();
        headers = headers.append('Accept', 'text/plain'); 
        headers = headers.append('Content-Type', 'application/json'); 

      return this.http.put(baseUrl+'/'+id , data, {headers});
  }

  delete(id: any): Observable<any> {
    let parametros = new HttpParams();
         parametros = parametros.append('id', id == null ? 0 : id) ;

    let headers = new HttpHeaders();
        headers = headers.append('Accept', ' text/plain');         

    return this.http.delete(baseUrl+'/'+id);
  }

  deleteAll(id?: number): Observable<any> {
    let parametros = new HttpParams();
        parametros = parametros.append('id', id == null ? 0 : id) ;

    let headers = new HttpHeaders();
        headers = headers.append('Accept', ' text/plain');         

    return this.http.delete(baseUrl+'/'+id);
  }

  findByTitle(title: any): Observable<any> {
    return this.http.get(`${baseUrl}?id=${title}`);
  }

  getAllProducts(): Observable<productos>{
    
    let parametros = new HttpParams();
        parametros = parametros.append('page', 1);
        parametros = parametros.append('rows', 100)
        
    return this.http.get<productos>(ProdUrl+'?' + parametros);

  }

  createProducto(data: ProductAdd): Observable<any> {
    let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json'); 
        headers = headers.append('Accept', '*/*');
        
    return this.http.post(ProdUrl, data, {headers});
  }

  
  getProductoD(id:any): Observable<ProR> {
    console.log("entro");
    return this.http.get<ProR>(ProdUrl+"/"+id);
  }

  deleteP(id: any){
    let parametros = new HttpParams();
    parametros = parametros.append('id', id == null ? 0 : id) ;

    let headers = new HttpHeaders();
        headers = headers.append('Accept', ' text/plain');         

    return this.http.delete(ProdUrl+'/'+id);
  }
  updateP(id: number, productName: string, categoryId: number, productPrice: number){
    const data = {
      productName: productName,
      categoryId: categoryId,
      productPrice: productPrice,
      productEnabled: true
    };

    
    let headers = new HttpHeaders();
        headers = headers.append('Accept', 'text/plain'); 
        headers = headers.append('Content-Type', 'application/json'); 

      return this.http.put(ProdUrl+'/'+id , data, {headers});
  }
}
