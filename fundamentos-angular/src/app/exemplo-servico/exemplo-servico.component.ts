import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico',
  templateUrl: './exemplo-servico.component.html',
  styleUrls: ['./exemplo-servico.component.css'],
})
export class ExemploServicoComponent  {
  public nome="";

  constructor(private logger:LoggerService){

  }
  
  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} fi adicionado`);
  }
  
  }


