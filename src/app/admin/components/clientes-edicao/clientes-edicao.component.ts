import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClienteService } from '../../services/cliente.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-clientes-edicao',
  templateUrl: './clientes-edicao.component.html',
  styleUrls: ['./clientes-edicao.component.css']
})
export class ClientesEdicaoComponent implements OnInit {

  //atributos
  mensagem: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.spinnerService.show();

    this.clienteService.getClienteById(id)
      .then(
        (data) => {
          //preenchendo o formulário com os dados obtidos da API..
          this.formCliente.patchValue(data);

          //tratamento para preencher o campo de data de nascimento
          this.formCliente.controls['dataNascimento']
            .setValue(formatDate(data.dataNascimento as Date, 'yyyy-MM-dd', 'en'));
        }
      )
      .catch(
        (e) => {
          console.log(e);
        }
      )
      .finally(
        () => { this.spinnerService.hide(); }
      )
  }

  formCliente = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formCliente.controls;
  }

  onSubmit(): void {

    this.spinnerService.show();
    
    this.clienteService.putCliente(this.formCliente.value)
      .then(
        (data) => {
          this.mensagem = data.message;
        }
      )
      .catch(
        (e) => {
          console.log(e);
        }
      )
      .finally(
        () => { this.spinnerService.hide(); }
      )
  }
}
