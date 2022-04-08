import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // injective HttpClient
  constructor(private http:HttpClient) { }

  url:string='http://localhost:3000/productList';

  // post product data
  postProductData(data:any){
    return this.http.post<any>(this.url,data);
  }

  //get product data
  getProductData(){
    return this.http.get<any>(this.url);
  }

  putProduct(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data);
  }


  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id)
  }
}
