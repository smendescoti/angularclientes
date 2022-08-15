import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { AuthenticationHelper } from "src/app/home/helpers/authentication.helper";
import { AuthenticationModel } from "src/app/home/models/authentication.model";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private authenticationHelper: AuthenticationHelper,
        private router: Router
    ) {

    }

    canActivate() {
        //verificando se o usuário está autenticado
        if (this.authenticationHelper.get() != null) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}