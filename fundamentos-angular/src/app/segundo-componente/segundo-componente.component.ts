import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {

    nome="Windson";
    dataNascimento="2000-11-08";
    urlImagem="/assets/avataaars2.png";

    mostrarDataNascimento(){
  alert(`A data de nascimento de Windson é:${this.dataNascimento} `);
    }
}
