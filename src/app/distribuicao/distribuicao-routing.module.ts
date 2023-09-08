import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastrarComponent } from './formulario-cadastrar/formulario-cadastrar.component';

const routes: Routes = [
  {path:'',component: FormularioCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistribuicaoRoutingModule { }
