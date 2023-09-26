import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastrarComponent } from '../distribuicao/formulario-cadastrar/formulario-cadastrar.component';
import { LoginComponent } from '../login/login/login.component';
import { ConsultarProcessoComponent } from '../consultar/consultar-processo/consultar-processo.component';
import { RegistarProcessoComponent } from '../registar/registar-processo/registar-processo.component';
import { HomeComponent } from '../home/home/home.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'Registar Processo',component: FormularioCadastrarComponent},
  {path:'Distribuir Processo',component: RegistarProcessoComponent},
  {path:'Consultar Processo',component: ConsultarProcessoComponent},
  {path:'login',component: LoginComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRotasModule { }
