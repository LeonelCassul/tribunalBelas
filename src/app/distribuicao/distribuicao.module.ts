import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistribuicaoRoutingModule } from './distribuicao-routing.module';
import { FormularioCadastrarComponent } from './formulario-cadastrar/formulario-cadastrar.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormularioCadastrarComponent
  ],
  imports: [
    CommonModule,
    DistribuicaoRoutingModule,
    AppMaterialModule,
    SharedModule

  ]
})
export class DistribuicaoModule { }
