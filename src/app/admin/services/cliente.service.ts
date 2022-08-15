import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthenticationModel } from "src/app/home/models/authentication.model";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    //definindo o endpoint que será acessado da API
    endpoint: string = `${environment.API_URL}/Clientes`;

    //método para executar o serviço de cadastro de cliente
    postCliente(data: any) {
        return axios.post(this.endpoint, data)
            .then(resp => { return resp.data });
    }

    //método para executar o serviço de edição de cliente
    putCliente(data: any) {
        return axios.put(this.endpoint, data)
            .then(resp => { return resp.data });
    }

    //método para executar o serviço de exclusão de cliente
    deleteCliente(id: string) {
        return axios.delete(`${this.endpoint}/${id}`)
            .then(resp => { return resp.data });
    }

    //método para executar o serviço de consulta de cliente
    getAllClientes() {
        return axios.get(this.endpoint)
            .then(resp => { return resp.data });
    }

    //método para executar o serviço de consulta de cliente por id
    getClienteById(id: string) {
        return axios.get(`${this.endpoint}/${id}`)
            .then(resp => { return resp.data });
    }

}

//criando o interceptador para garantir que todas as chamadas para
//serviços de clientes possam enviar o token de autenticação
axios.interceptors.request.use(

    config => {

        if (config.url != null) {

            //verificando se a requisição feita é para a API de clientes
            if (config.url.includes(`${environment.API_URL}/Clientes`)) {

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