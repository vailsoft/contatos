import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
    nome:"Vailson Silva",
    email:"vailsoft@hotmail.com",
    telefones: [""]
  }

  cs:ContatoService = new ContatoService();

  constructor() { }

  
  
  cancelar(){
     console.log("Pediu pra cancelar");
     this.onCancelarClick.emit();
  }

  track(index:number, value:string){
    return index;
  }
  
  ngOnInit(): void {
  }

  addTelefone():void{
    this.novoContato.telefones.push("");
  }

  removeTelefone(pos: number):void{
    this.novoContato.telefones.splice(pos, 1);
  }

  salvar(){
      this.cs.addContato(this.novoContato);
      //Sumir depois de cancelar
      //this.onCancelarClick.emit();

      this.novoContato = {
        nome:"",
        email: "",
        telefones: [""]
      }
  }

}
