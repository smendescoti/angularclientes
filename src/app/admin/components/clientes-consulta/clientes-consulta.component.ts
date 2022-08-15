import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ClienteModel } from '../../models/cliente.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css']
})
export class ClientesConsultaComponent implements OnInit {

  //atributos
  mensagem: string = '';

  //dados para exibição na tabela
  clientes = new MatTableDataSource<ClienteModel>();

  //campos que serão exibidos na tabela
  displayedColumns: string[] = [
    'nome',
    'dataNascimento',
    'telefone',
    'tipo',
    'email',
    'cpf',
    'actions'
  ];

  //componente para paginação do grid
  @ViewChild('paginator') paginator: MatPaginator | null = null;

  constructor(
    private clienteService: ClienteService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.spinnerService.show();

    this.clienteService.getAllClientes()
      .then(
        (data: ClienteModel[]) => {
          this.clientes.data = data; //armazenando os clientes obtidos
          this.clientes.paginator = this.paginator;
          if (this.paginator != null)
            this.paginator._intl.itemsPerPageLabel = 'Itens por página';
        }
      )
      .catch(
        (e) => {
          console.log(e);
        }
      )
      .finally(
        () => {
          this.spinnerService.hide();
        }
      )
  }

  onDelete(id: string): void {

    if (window.confirm('Deseja excluir o cliente selecionado?')) {
      this.spinnerService.show();
      this.clienteService.deleteCliente(id)
        .then(
          (data) => {
            this.mensagem = data.message;
            this.ngOnInit();
          }
        )
        .catch(
          (e) => {
            console.log(e);
            this.mensagem = 'Falha ao excluir o cliente.';
          }
        )
        .finally(
          () => { this.spinnerService.hide(); }
        );
    }
  }

}
