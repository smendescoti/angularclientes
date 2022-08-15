import { Injectable } from "@angular/core";
import { AuthenticationModel } from "../models/authentication.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper {

    auth_user: string = 'AUTH_USER';

    signIn(model: AuthenticationModel): void {

        let json = JSON.stringify(model);
        localStorage.setItem(this.auth_user, json);
    }

    signOut(): void {
        localStorage.removeItem(this.auth_user);
    }

    get(): AuthenticationModel | null {

        let json = localStorage.getItem(this.auth_user);
        if (json != null)
            return JSON.parse(json) as AuthenticationModel;
        else
            return null;
    }
}