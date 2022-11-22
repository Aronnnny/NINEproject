import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/models/produtomodel';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  public products : ProdutoModel[] = [];
  public grandTotal !: number;
  constructor() { }

  ngOnInit(): void {
    this.obterprodutos()
  }

  adicionar(produto:ProdutoModel){
    var produtoLocalStoge = localStorage.getItem("produtoLocalStoge");
    if (!produtoLocalStoge) {
        // se nao existir 
          this.products.push(produto);            
    } else {
        // se ja existir 
         this.products = JSON.parse(produtoLocalStoge);
         this.products.push(produto);
                    
    }

    localStorage.setItem("produtoLocalStoge", JSON.stringify(this.products));
    
   

  }

  obterprodutos() : ProdutoModel[]{
    var produtocarrinho = localStorage.getItem("produtolocal")
    if(produtocarrinho){this.products=JSON.parse(produtocarrinho)}
    return this.products 
  }
}

