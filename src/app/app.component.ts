import { Component } from '@angular/core';
import { AuthenticationHelper } from './home/helpers/authentication.helper';
import { AuthenticationModel } from './home/models/authentication.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: AuthenticationModel = new AuthenticationModel();

  constructor(
    private authenticationHelper: AuthenticationHelper
  ) {
    this.model = authenticationHelper.get() as AuthenticationModel;
  }

  logout(): void {

    if (window.confirm('Deseja realmente sair do sistema?')) {
      this.authenticationHelper.signOut();
      window.location.href = "/";
    }
  }

}
