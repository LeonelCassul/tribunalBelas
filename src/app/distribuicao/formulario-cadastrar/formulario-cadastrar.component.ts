import { Component, OnInit } from '@angular/core';
import { ListaProcesso } from '../model/lista-processo';
import { ServicoListarProcessoService } from '../services/servico-listar-processo.service';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrosComponent } from 'src/app/shared/components/erros/erros.component';
import {catchError} from 'rxjs/operators'

@Component({
  selector: 'app-formulario-cadastrar',
  templateUrl: './formulario-cadastrar.component.html',
  styleUrls: ['./formulario-cadastrar.component.scss']
})
export class FormularioCadastrarComponent implements OnInit {

   listaProcesso$ : Observable<ListaProcesso[]>;
   displayedColumns =  ['nProcesso','arguido','seccao','juiz','data'];


  constructor(private servicoListarProcessoService : ServicoListarProcessoService,
              public dialog: MatDialog
    ) {
    //this.listaProcesso = [];

      this.listaProcesso$ = this.servicoListarProcessoService.listar()
      .pipe(catchError(error => {
          this.darErro("Erro ao Carregar os Processos.")
          return of([]);
        }
        )
      )
  }

  darErro(errorMsg:string) {
    this.dialog.open(ErrosComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {}

}
