import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
  {
    nome: 'Mariana Ribeiro 1',
    email: 'mariana@teste.com',
    telefones:['1111-1111', '2222-2222']
  },
  {
    nome: 'Mariana Ribeiro 2',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },
  {
    nome: 'Mariana Ribeiro 3',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },
  {
    nome: 'Mariana Ribeiro 4',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },
  {
    nome: 'Mariana Ribeiro 5',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },
  {
    nome: 'Mariana Ribeiro 6',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },{
    nome: 'Mariana Ribeiro 7',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },{
    nome: 'Mariana Ribeiro 8',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },{
    nome: 'Mariana Ribeiro 9',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },{
    nome: 'Mariana Ribeiro 10',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },{
    nome: 'Mariana Ribeiro 11',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  },{
    nome: 'Mariana Ribeiro 12',
    email: 'mariana@teste.com',
    telefones:['1111-1111']
  }
]


@Injectable({
  providedIn: 'root'
})


export class ContatoService {

  private baseDeContatos:Contato[];
  private chave:string = "CONTATOS";

  constructor() { 
    //Carregando informações do local store na chave contatos
    let dados = window.localStorage.getItem(this.chave);
    //Verificando se as informações existem
    if(dados){
      //Existe transformando em array e guardando em base de contatos
      this.baseDeContatos = JSON.parse(dados);
    } else {
      //Não existem: Poe um array vazio no Atributo base de contatos
      window.localStorage.setItem(this.chave, "[]");
      this.baseDeContatos = [];
    }
  }

  getContatos():Contato[]{
    return this.baseDeContatos;
  }

  addContato(c:Contato):void{
    this.baseDeContatos.push(c);
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
  }


}
