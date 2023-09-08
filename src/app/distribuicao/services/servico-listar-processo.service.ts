import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListaProcesso } from '../model/lista-processo';

@Injectable({
  providedIn: 'root'
})
export class ServicoListarProcessoService {

  constructor(private HttpClient: HttpClient) { }

  lista():ListaProcesso[]
  {
    return [
    {id:'1', nProcesso:'1369', arguido:'Yes or Not',
     seccao:'Turma A',juiz: 'Leonel Cassul', data:'ola mundo'
    }
    ];
  }
}
