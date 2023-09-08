import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',pathMatch: 'full', redirectTo:'distribuicao'
  },

  {
    path: 'formulario',
    loadChildren: () => import('./distribuicao/distribuicao.module').then(m => m.DistribuicaoModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
