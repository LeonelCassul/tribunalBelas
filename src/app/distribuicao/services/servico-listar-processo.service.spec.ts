import { TestBed } from '@angular/core/testing';

import { ServicoListarProcessoService } from './servico-listar-processo.service';

describe('ServicoListarProcessoService', () => {
  let service: ServicoListarProcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoListarProcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
