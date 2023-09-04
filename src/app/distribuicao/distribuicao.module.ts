import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistribuicaoRoutingModule } from './distribuicao-routing.module';
import { FormularioCadastrarComponent } from './formulario-cadastrar/formulario-cadastrar.component';


@NgModule({
  declarations: [
    FormularioCadastrarComponent
  ],
  imports: [
    CommonModule,
    DistribuicaoRoutingModule
  ]
})
export class DistribuicaoModule { }
