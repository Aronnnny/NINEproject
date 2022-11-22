import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  postClient(data : any) {
    return this.http.post<any>("https://localhost:7131/api/Cliente", data);
  }

  getClient(){
    return this.http.get<any>("https://localhost:7131/api/Cliente");
  }

  putClient(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("https://localhost:7131/api/Cliente"+ id ,info);
  }

  deleteClient(id:string){
    return this.http.delete<any>("https://localhost:7131/api/Cliente"+id);
  }

  //Separação

  postAdmin(data : any) {
    return this.http.post<any>("https://localhost:7131/api/Admin", data);
  }

  getAdmin(){
    return this.http.get<any>("https://localhost:7131/api/Admin");
  }

  putAdmin(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("https://localhost:7131/api/Admin"+ id ,info);
  }

  deleteAdmin(id:string){
    return this.http.delete<any>("https://localhost:7131/api/Admin"+id);
  }

  
  postProduct(data : any) {
    return this.http.post<any>("https://localhost:7131/api/Produto", data);
  }

  getProduct(){
    return this.http.get<any>("https://localhost:7131/api/Produto");
  }

  putProduct(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("https://localhost:7131/api/Produto"+ id ,info);
  }

  deleteProduct(id:string){
    return this.http.delete<any>("https://localhost:7131/api/Produto"+id);
  }

  enviarArquivo(files: File | null){
    return this.http.post("http://localhost:7119/api/Product/", files)
  }
}
