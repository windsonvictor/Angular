import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico',
  templateUrl: './exemplo-servico.component.html',
  styleUrls: ['./exemplo-servico.component.css']
})
export class ExemploServicoComponent implements OnInit {
  nome="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
