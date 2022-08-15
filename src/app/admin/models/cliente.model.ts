/*
    Modelo de dados para cliente
*/
export class ClienteModel {

    id: string = '';
    nome: string = '';
    dataNascimento: Date | null = null;
    telefone: string = '';
    tipo: string = '';
    email: string = '';
    cpf: string = '';
    observacoes: string = '';
}