import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BazarService {

  baseUrl="http://localhost:62152/api/products/"

  constructor(private http:HttpClient) { }
  GetAllProducts(){
    return this.http.get(this.baseUrl+"AllProducts");
  }

  
}
