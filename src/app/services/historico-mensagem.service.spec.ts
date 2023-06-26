import { TestBed } from '@angular/core/testing';

import { HistoricoMensagemService } from './historico-mensagem.service';

describe('HistoricoMensagemService', () => {
  let service: HistoricoMensagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoMensagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
