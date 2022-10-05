import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celulares';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent  {
  celulares: Celular[]=[
    {id:1,nome:"Celular XL",descricao:"Celular grande",esgotado:false},
    {id:2,nome:"Celular normal",esgotado:false},
    {id:3,nome:"Celular Mini",descricao:"Celular pequeno",esgotado:true}
  ]
celular: any;

 

}
