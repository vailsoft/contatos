import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly chave:string = "CONTATOS";
  constructor() { }

  getContatos():Contato[] {

    // Tentar carregar os dados do localstorage
    let dados = window.localStorage.getItem(this.chave);
    // Verificar se havia dados no localstore
    if(dados){
      //Se houver dados transformar em array e retornar um array de contatos
      let contatosCarregados:Contato[] = JSON.parse(dados);
      return contatosCarregados;
    } else {
      // Se não houver dados, guardo o array no localstorage e retorna o array
      window.localStorage.setItem(this.chave, "[]");
      return [];
    }

  }

  addContato(c:Contato): void {
    // Levantar os contatos do localstorage
    let contatos = this.getContatos();
    // adicionar o contato c o final do array
    contatos.push(c);
    // salvar o array de volta no localstorage
    window.localStorage.setItem(this.chave, JSON.stringify(contatos));
  }

}
