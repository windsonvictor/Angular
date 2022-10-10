import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit,OnChanges, OnDestroy  {
  horario= new Date();
  timer: any =null;
  @Input() texto="";
 

  ngOnInit(): void {
    console.log("O evento ONInit Disparou");
    this.timer= setInterval(()=> this.horario= new Date(),1000);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }



}
