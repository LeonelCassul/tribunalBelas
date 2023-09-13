import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosComponent } from './components/erros/erros.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
    ErrosComponent

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[ErrosComponent]
})
export class SharedModule { }
