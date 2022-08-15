/*
    Modelo de dados para ler o retorno
    do serviço de autenticação de usuários
*/
export class AuthenticationModel {

    nome: string = '';
    email: string = '';
    foto: string = '';
    accessToken: string = '';
    criadoEm: Date | null = null;
    expiraEm: Date | null = null;
}