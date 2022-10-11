import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagNaoEncontradaComponent } from '../pag-nao-encontrada/pag-nao-encontrada.component';
import { PaginaComParametroComponent } from '../pagina-com-parametro/pagina-com-parametro.component';
import { PrimeiraPaginaComponent } from '../primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';

const routes: Routes=[
  {path:"primeira-pagina", component:PrimeiraPaginaComponent},
  {path:"segunda-pagina", component:SegundaPaginaComponent},
  {path:"pagina-com-parametros/:id", component:PaginaComParametroComponent},
  {path:"",redirectTo:"primeira-pagina", pathMatch:"full" },
  {path:"**", component:PagNaoEncontradaComponent}
]; 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutingModule { }
