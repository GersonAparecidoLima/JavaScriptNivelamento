//serviço responsável por trabalhar com o endereço

import * as requestService from './request-service.js';
import Address from '../models/address.js';

//Função responsável por recebe o número do cep do inpt
//passar para api ==> https://viacep.com.br/ws/${cep}/json/
//e receber o retorno para o objeto address
export async function findByCep(cep) {

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await requestService.getJson(url);

    //retorno para o objeto address
    //Instanciei o meu objeto address
    //passando os agumenotos do resutado result
    const address = new Address(result.cep, result.logradouro, null, result.localidade);
    return address;
}

export function getErrors(address) {
    const errors = {};

    //!address.cep não esta definido
    //address.cep == "" não esta preenchido

    if (!address.cep || address.cep == "") {
        errors.cep = "Campo requerido";
    }

    if (!address.number || address.number == "") {
        errors.number = "Campo requerido";
    }

    return errors;
}