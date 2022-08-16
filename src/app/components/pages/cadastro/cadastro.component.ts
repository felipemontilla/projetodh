import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  cadastros = [] as any;

   cadastro: Cadastro ={
    nome: "",
    cpf: 0,
    email:"",
    senha:"",
   };
 
 
 constructor(private service: CadastroService){
  this.cadastro = new Cadastro();
  
 }
  
  onSubmit(){
    this.service
    .inserirCadastro(this.cadastro)
    .subscribe( response => console.log(response));
      
  }

  ngOnInit(): void { this.cadastro }
}


