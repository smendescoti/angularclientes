import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private clienteService: ClienteService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }
 
  formCliente = new FormGroup({
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

    this.clienteService.postCliente(this.formCliente.value)
      .then(
        (data) => {
          this.mensagem = data.message;
          this.formCliente.reset();

          //remover as mensagens de erro do formulário
          Object.keys(this.formCliente.controls).forEach(key => {
            this.formCliente.get(key)?.setErrors(null);
          });
        }
      )
      .catch(
        (e) => {
          this.mensagem = 'Falha ao cadastrar cliente.';
          console.log(e);
        }
      )
      .finally(
        () => { this.spinnerService.hide(); }
      )
  }

}
