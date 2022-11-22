import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { pipe } from 'rxjs';
import { ApiService } from './views/service/api.service'; 
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field'; 
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    CarrinhoComponent,
    PedidosComponent,
    EnderecoComponent,
    DContaComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarsenhaComponent,
    CheckoutComponent,
    ProdutoComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
    HttpClientModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
