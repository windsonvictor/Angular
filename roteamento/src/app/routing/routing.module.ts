import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoGuard } from '../auto.guard';
import { LoginComponent } from '../login/login.component';
import { PagNaoEncontradaComponent } from '../pag-nao-encontrada/pag-nao-encontrada.component';
import { PaginaComParametroComponent } from '../pagina-com-parametro/pagina-com-parametro.component';
import { PaginaProtegidaComponent } from '../pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponent } from '../primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';

const routes: Routes=[
  {path:"primeira-pagina", component:PrimeiraPaginaComponent},
  {path:"login", component:LoginComponent},
  {path:"segunda-pagina", component:SegundaPaginaComponent},
  {path:"pagina-protegida", component:PaginaProtegidaComponent,canActivate:[AutoGuard]},
  {path:"pagina-com-parametros/:id", component:PaginaComParametroComponent},
  {path:"",redirectTo:"primeira-pagina", pathMatch:"full" },
  { path: 'lazy-loading', loadChildren: () => import('../lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path:"**", component:PagNaoEncontradaComponent}
]; 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutingModule { }
