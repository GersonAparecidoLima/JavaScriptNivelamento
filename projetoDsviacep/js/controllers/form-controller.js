import Address from '../models/address.js';
import * as addressService from '../services/address-service.js';
import * as listController from './list-controller.js';


//Quem responde a ação do usuario e controller
//Este form controller e responsavel por controlar o formulario

//State e um função construtora
//Para representa o que é o tipo do modulo
function State() {

    //Instanciando um address
    //Localizado em ../models/address.js: 
    this.address = new Address();

    //Referência do botoa do salvar
    this.btnSave = null;
    //Referência do botoa do Limpar
    this.btnClear = null;

    //Referência do input cep
    this.inputCep = null;
    //Referência do input logadoro
    this.inputStreet = null;
    //Referência do input número
    this.inputNumber = null;
    //Referência do input cidade
    this.inputCity = null;

    //Referência a mensagem de erro do cep
    this.errorCep = null;
    //Referência a mensagem de erro do número
    this.errorNumber = null;
}

//Este objeto vai guarda as informações relevante do modulo
//como as refêrncia para os inputs e botões
//****Estanciamos um objeto da função construtora****
const state = new State();

//Função responsável por iniciar o controlado
//Preparação do funcionamento
//***Iniciamos todos os valores do estado na função init()***
export function init() {
    /*
    nome do formulario => newAddress
    nome do input => cep
    */


    //***Iniciamos todos os valores do estado***

    //instanciando o inputCep do objeto state
    //Buscando a informação que esta no formulario
    //document.forms.newAddress.cep;
    state.inputCep = document.forms.newAddress.cep;

    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    //Buscando pelo o document.querySelector('[data-error="cep"]')
    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    //Ao clicar no botão salvar com o evente change será chamada
    //a função handleInputNumberChange
    state.inputNumber.addEventListener('change', handleInputNumberChange);

    //Ao clicar no botão salvar com o evente keyup será chamada
    //a função handleInputNumberKeyup
    state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);

    //Ao clicar no botão salvar com o evente click será chamada
    //a função handleBtnClearClick
    state.btnClear.addEventListener('click', handleBtnClearClick);

    //Ao clicar no botão salvar com o evente click será chamada
    //a função handleBtnSaveClick
    state.btnSave.addEventListener('click', handleBtnSaveClick);

    //Ao clicar no botão salvar com o evente change será chamada
    //a função handleInputCepChange
    state.inputCep.addEventListener('change', handleInputCepChange);
}

function handleInputNumberKeyup(event) {
    //buscando o valor do input numero para atribuir
    //para state.address.number 
    state.address.number = event.target.value;
}


//vai faz a requecisão de buscar o cep na api
async function handleInputCepChange(event) {
    const cep = event.target.value;

    try {
        const address = await addressService.findByCep(cep);

        //address contem o resultado do json

        //Atribido valor para state.inputStreet.value ==> address.street
        state.inputStreet.value = address.street;
        //Atribido valor para state.inputCity.value ==> address.city;
        state.inputCity.value = address.city;

        //state.address da função  State recebe address do service 
        state.address = address;

        //Limpou qual quer tipo de erro
        setFormError("cep", "");

        //coloca o curso do mouse no input do inputNumber
        state.inputNumber.focus();

    }
    catch (e) {
        state.inputStreet.value = "";
        state.inputCity.value = "";
        setFormError("cep", "Informe um CEP válido");
    }
}

function handleBtnSaveClick(event) {

    //event.preventDefault(); ==> Não permite que a 
    //pagina seja enviada e chame outra pagina 
    //não permite chamar nenhuma requecição
    event.preventDefault();

    const errors = addressService.getErrors(state.address);

    //Array que contem o nomes dos campos que tem problema
    const keys = Object.keys(errors);

    //keys.length > 0 significa que tem pelo menos um erro
    if (keys.length > 0) {
        //colocando a mensagem de campo obrigatorio 
        //no Cep e no Número
        keys.forEach(key => {
            //keys.forEach e um função de auta ordem que 
            //faz alguma coisa com cada um doe elementos.
            //e um opção do for
            setFormError(key, errors[key]);

            //e uma expresão lambda key =>
            //para cada chave ele vai fazer a utilizaçao da função
            //setFormError

        });
    }
    else {
        //chamado o list-controlle
        //para adicionar um card
        listController.addCard(state.address);
        clearForm();
    }
}

//função para tratar o evento de mudança
function handleInputNumberChange(event) {

    //Verificar se o contéudo está vazio
    //Pegando o valor do input
    if (event.target.value == "") {
        setFormError("number", "Campo requerido");
    }
    else {
        setFormError("number", "");
    }
}

function handleBtnClearClick(event) {
    //event.preventDefault(); ==> Não permite que a 
    //pagina seja enviada e chame outra pagina 
    //Barra o processo
    //não permite chamar nenhuma requecição
    event.preventDefault();
    clearForm();
}

//Limpando o formulario
function clearForm() {
    state.inputCep.value = "";
    state.inputCity.value = "";
    state.inputNumber.value = "";
    state.inputStreet.value = "";

    //Chamando a função para limpar as mensagem de erro
    setFormError("cep", "");
    setFormError("number", "");

    state.address = new Address();

    state.inputCep.focus();
}

//Função interna que não será exportada
function setFormError(key, value) {
    //este parametro key e o nome do erro
    //value e o valor que eu vou retorna no erro

    //vamos interpolar o parametro key para a querySelector 
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}