import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { Observable } from 'rxjs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HistoricoMensagemService } from '../services/historico-mensagem.service';
import { Mensagem } from '../model/mensagem';

@Component({
  selector: 'app-historico-mensagem',
  templateUrl: './historico-mensagem.component.html',
  styleUrls: ['./historico-mensagem.component.css']
})
export class HistoricoMensagemComponent implements OnInit, AfterViewInit  {
  public username!: string | null;
  public numeroTelefone!: string;
  mensagens: Observable<Mensagem[]>;

  displayedColumns: string[] = ['timestamp', 'mensagemRecebida', 'respostaMensagem'];

  //dataSourceTest = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource = new MatTableDataSource<Mensagem>([]);

  //@ViewChild(MatPaginator) paginator: MatPaginator | null = null;
 
  constructor(
    private authenticationService: AuthenticationService,
    private historicoService: HistoricoMensagemService,
  ) {
    this.mensagens = this.historicoService.emptyArray();
  }

  ngOnInit(): void {
    //this.dataSourceTest.paginator = this.paginator;
    //this.dataSource.paginator = this.paginator
    this.username = localStorage.getItem("username");
    if(this.username != null){
      this.username = this.username.toUpperCase();
    }
  }

  ngAfterViewInit() {
    //this.dataSourceTest.paginator = this.paginator;
  }

  logout(): void {
    this.authenticationService.logout();
  }

  getHistorico(phoneNumber: string): void {
    console.log("Buscando histórico");
    this.mensagens = this.historicoService.getHistorico(phoneNumber);
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



