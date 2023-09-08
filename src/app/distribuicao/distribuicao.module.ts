import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistribuicaoRoutingModule } from './distribuicao-routing.module';
import { FormularioCadastrarComponent } from './formulario-cadastrar/formulario-cadastrar.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    FormularioCadastrarComponent
  ],
  imports: [
    CommonModule,
    DistribuicaoRoutingModule,
    AppMaterialModule
  ]
})
export class DistribuicaoModule { }
