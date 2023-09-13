import { Component, OnInit } from '@angular/core';
import { ListaProcesso } from '../model/lista-processo';
import { ServicoListarProcessoService } from '../services/servico-listar-processo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario-cadastrar',
  templateUrl: './formulario-cadastrar.component.html',
  styleUrls: ['./formulario-cadastrar.component.scss']
})
export class FormularioCadastrarComponent implements OnInit {

   listaProcesso$ : Observable<ListaProcesso[]>;
   displayedColumns =  ['nProcesso','arguido','seccao','juiz','data'];


  constructor(private servicoListarProcessoService : ServicoListarProcessoService) {
    //this.listaProcesso = [];
      this.listaProcesso$ = this.servicoListarProcessoService.listar().pipe(
        catchError()
      );
  }

  ngOnInit(): void {}

}
