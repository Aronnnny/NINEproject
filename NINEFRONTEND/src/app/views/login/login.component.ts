import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:[''],
      Senha:['']
    })
  }
  login(){
    this.http.get<any>("https://localhost:7131/api/Cliente")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.Email && a.senha === this.loginForm.value.Senha
      });
      if(user){
        alert("Logado com sucesso");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("Essa conta não existe");
      }
    },err=>{
      alert("Algo deu Errado")
    })
  }

}
