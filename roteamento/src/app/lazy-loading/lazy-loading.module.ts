import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';


const routes: Routes = [
  { path: '', component: LazyLoadingComponent }
];

@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadingModule { }
