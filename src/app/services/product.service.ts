//Auto Generated File for use @Injectable
import { Injectable, inject } from '@angular/core';
//For read environment files
import { environment } from '../../environments/environment';
//For connect API, Send JSON
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

//For API CRUD
export class ProductService {
  //ตัวแปรสำหรับเก็บ URL of API
  private apiURL = environment.baseURLAPI;
  //Header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //DI
  private http = inject(HttpClient);
  //Get all products
  getAllProducts() {
    return this.http.get(this.apiURL + 'products', this.httpOptions);
  }
  //Get product by id
  getProduct(id: number) {
    return this.http.get(this.apiURL + 'products/' + id, this.httpOptions);
  }
  //Add product
  addProduct(product: any) {
    return this.http.post(this.apiURL + 'products', JSON.stringify(product), this.httpOptions);
  }
  //Update product
  updateProduct(id: number, product: any) {
    return this.http.put(this.apiURL + 'products/' + id, JSON.stringify(product), this.httpOptions);
  }
  //Delete product
  deleteProduct(id: number) {
    return this.http.delete(this.apiURL + 'products/' + id, this.httpOptions);
  }


}
