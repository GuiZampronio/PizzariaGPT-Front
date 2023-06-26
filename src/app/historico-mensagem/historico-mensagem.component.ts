import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historico-mensagem',
  templateUrl: './historico-mensagem.component.html',
  styleUrls: ['./historico-mensagem.component.css']
})
export class HistoricoMensagemComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }

}
