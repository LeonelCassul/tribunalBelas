import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosComponent } from './components/erros/erros.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoriaPipe } from './pipes/categoria.pipe';



@NgModule({
  declarations: [
    ErrosComponent,
    CategoriaPipe

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrosComponent,
    CategoriaPipe
]
})
export class SharedModule { }
