import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  modalcarrinho: any;
  Carrinho: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  getCarrinho() {
    this.http.get('https://localhost:7131/api/Pedido')
  }
  excluir(carrinho: CarrinhoComponent, template: any) {
    console.log(carrinho);
    this.Carrinho = carrinho;
  }
  excluirCarrinho() {
    this.http.delete(`${environment.apibaseURL}ap/pedido`)
      .subscribe(
        resultado => {
          console.log('Produto excluído com sucesso.');
        },
        erro => {
          if (erro.status == 404) {
            console.log('Produto não localizado.');
          }
        }
      );
  }
}