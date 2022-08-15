import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    //definindo o endpoint que será acessado da API
    endpoint: string = `${environment.API_URL}/Login`;

    //método para realizar a requisição de autenticação
    postLogin(data: any) {
        return axios.post(this.endpoint, data)
            .then(resp => { return resp.data });
    }
}