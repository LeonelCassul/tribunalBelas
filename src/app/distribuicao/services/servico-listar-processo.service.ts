import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListaProcesso } from '../model/lista-processo';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoListarProcessoService {

  private readonly API ='/assets/lista.json';

  constructor(private HttpClient: HttpClient) { }

  listar()
  {
    return this.HttpClient.get<ListaProcesso[]>(this.API).pipe(delay(15000));

  }
}
//tap(listaProcesso => console.log(listaProcesso))
