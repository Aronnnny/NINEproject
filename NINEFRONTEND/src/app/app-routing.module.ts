import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './views/perfil/perfil.component';
import { PedidosComponent } from './views/perfil/pedidos/pedidos.component';
import { EnderecoComponent } from './views/perfil/endereco/endereco.component';
import { DContaComponent } from './views/perfil/d-conta/d-conta.component';
import { CadastroComponent } from './views/login/cadastro/cadastro.component';
import { RecuperarsenhaComponent } from './views/login/recuperarsenha/recuperarsenha.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [{path: 'login',component:LoginComponent},
{path: 'home',component:HomeComponent},
{path: 'carrinho',component:CarrinhoComponent},
{path: 'perfil',component:PerfilComponent},
{path: 'pedidos',component:PedidosComponent},
{path: 'endereco',component:EnderecoComponent},
{path: 'd-conta',component:DContaComponent},
{path: 'cadastro',component:CadastroComponent},
{path: 'recuperarsenha',component:RecuperarsenhaComponent},
{path: 'checkout',component:CheckoutComponent},
{path: 'produto',component:ProdutoComponent},]

@core.NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
