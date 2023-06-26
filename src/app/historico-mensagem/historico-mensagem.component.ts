import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historico-mensagem',
  templateUrl: './historico-mensagem.component.html',
  styleUrls: ['./historico-mensagem.component.css']
})
export class HistoricoMensagemComponent implements OnInit {
  public username!: string | null;
  public numeroTelefone!: string

  constructor(
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    if(this.username != null){
      this.username = this.username.toUpperCase();
    }
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
