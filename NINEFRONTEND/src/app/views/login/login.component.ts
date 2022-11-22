import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private router: Router, private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email:['', Validators.required],
    senha:['', Validators.required]
  })
  }
  login(){
    this.http.get<any>("https://localhost:7119/api/Client/")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      });
      if(user){
        alert("Login realizado com sucesso");
        this.loginForm.reset();
        this.router.navigate(['/home'])
      }else{
        alert("Usúario ou Senha inválido");
      }
    }, err=>{
      alert("Não foi possivel realizar")
    })
  }

  loginadm(){
    this.http.get<any>("https://localhost:7119/api/Admin/")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      });
      if(user){
        this.loginForm.reset();
        this.router.navigate(['/admin'])
      }
    }, err=>{
      alert("Não foi possivel realizar")
    })
  }

  cadastro(){
    this.router.navigate(["/cadastro"])
  }
}