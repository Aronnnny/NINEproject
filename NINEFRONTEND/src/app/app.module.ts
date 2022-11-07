import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { PedidosComponent } from './views/perfil/pedidos/pedidos.component';
import { EnderecoComponent } from './views/perfil/endereco/endereco.component';
import { DContaComponent } from './views/perfil/d-conta/d-conta.component';
import { CadastroComponent } from './views/login/cadastro/cadastro.component';
import { RecuperarsenhaComponent } from './views/login/recuperarsenha/recuperarsenha.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ProdutoComponent } from './views/produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    CarrinhoComponent,
    PedidosComponent,
    EnderecoComponent,
    DContaComponent,
    CadastroComponent,
    RecuperarsenhaComponent,
    CheckoutComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
