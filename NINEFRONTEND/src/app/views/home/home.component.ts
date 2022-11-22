import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { pipe } from 'rxjs';
import { filter } from 'rxjs';
import { ProdutoModel } from 'src/app/models/produtomodel';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos : any
  public carrinhocompra ! : CarrinhoComponent
  produto ! : ProdutoModel
  public ProductList : any ;
    constructor(private http : HttpClient) { }

    ngOnInit(): void {
      this.carrinhocompra = new CarrinhoComponent()
      this.http.get(`${environment.apibaseURL}Produto`)
        .subscribe(produtos=>{
          this.produtos = produtos
          console.log(produtos)
        })
  }

  addcarrinho(produto:ProdutoModel){
    this.carrinhocompra.adicionar(produto)
  }

  // search(event: any) {
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.searchT.next(this.searchTerm);
  // }
  
  // filter(category: string) {
  //   this.filterCategory = this.ProductList
  //     .filter((a: any) => {
  //       if (a.idCategory === category || category === '') {
  //         return a;
  //       }
  //     })
  //   }

  // addtocart(item: any){
  //   this.cartService.addtoCart(item);
  // }
   }