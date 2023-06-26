import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from '../model/mensagem';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HistoricoMensagemService {

  private readonly API = '/assets/emptyJsonArray.json';

  constructor(private http: HttpClient) { }

  public getHistorico(phoneNumber: string): Observable<Mensagem[]> {
    let params = new HttpParams().set('phoneNumber', phoneNumber);

    return this.http.get<Mensagem[]>(
      environment.apiUrl + '/mensagem',
      { params: params},
    ).pipe(
      tap(mensagens => console.log(mensagens))
    );
  }

  public emptyArray(): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(this.API);
  }

}
