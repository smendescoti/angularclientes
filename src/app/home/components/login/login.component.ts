import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationHelper } from 'src/app/home/helpers/authentication.helper';
import { AuthenticationModel } from 'src/app/home/models/authentication.model';
import { AuthenticationService } from '../../services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private authenticationHelper: AuthenticationHelper,
    private authenticationService: AuthenticationService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    if (this.authenticationHelper.get())
      location.href = "/admin/dashboard";
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get form(): any {
    return this.formLogin.controls;
  }

  onSubmit() {

    this.spinnerService.show();

    this.authenticationService.postLogin(this.formLogin.value)
      .then(
        (data: AuthenticationModel) => {
          //autenticando o usuário no angular (localstorage)
          this.authenticationHelper.signIn(data);
          //redirecionar para a página do dashboard
          window.location.href = '/admin/dashboard';
        }
      )
      .catch(
        (e) => {
          switch (e.response.status) {
            case 401:
              this.mensagem = e.response.data.message;
              break;
            default:
              this.mensagem = "Falha ao autenticar o usuário.";
              break;
          }
        }
      )
      .finally(
        () => {
          this.spinnerService.hide();
        }
      );
  }

}
