import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthenticationModel } from "src/app/home/models/authentication.model";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    endpoint: string = `${environment.API_URL}/Dashboard`;

    getGraficoTipos() {
        return axios.get(`${this.endpoint}/grafico-tipos`)
            .then(resp => { return resp.data });
    }

    getGraficoPeriodos() {
        return axios.get(`${this.endpoint}/grafico-periodos`)
            .then(resp => { return resp.data });
    }

}

//criando o interceptador para garantir que todas as chamadas para
//serviços de dashboard possam enviar o token de autenticação
axios.interceptors.request.use(

    config => {

        if (config.url != null) {

            //verificando se a requisição feita é para a API de Dashboard
            if (config.url.includes(`${environment.API_URL}/Dashboard`)) {

                //obtendo o token gravado na localstorage
                var json = localStorage.getItem('AUTH_USER');

                if (json != null && config.headers != null) {
                    var auth = JSON.parse(json) as AuthenticationModel;

                    //enviando o token do usuário autenticando no cabeçalho
                    //da requisição para a API
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                }
            }
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);