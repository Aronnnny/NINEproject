import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Email: ['',Validators.required],
      Senha: ['', Validators.required],

    })
  }
  signUp() {
    this.http.post<any>("https://localhost:7131/api/Cliente", this.signupForm.value)
      .subscribe(res => {
        alert("Cadastrado com Sucesso");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Algo deu errado")
      })
  }


}
