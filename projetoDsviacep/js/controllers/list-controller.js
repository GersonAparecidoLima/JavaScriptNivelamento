
//Função construtora 
function State() {
    this.listSection = null;
}

//Criando um objeto do tipo State
const state = new State();

//iniciar o componente do list-controller
export function init() {
    //selecionando pelo id #list-section
    state.listSection = document.querySelector("#list-section");
}

//Adicionar o car no tela do html
export function addCard(address) {
    const card = createCard(address);
    //Adcionando o novo card ao listSection
    state.listSection.appendChild(card);
}

//Função responsável por criar um card
//criando o html com o js
function createCard(address) {

    const div = document.createElement("div");
    div.classList.add("card-list-item");

    const h3 = document.createElement("h3");
    h3.innerHTML = address.city;

    const line = document.createElement("p");
    line.classList.add("address-line");
    line.innerHTML = `${address.street}, ${address.number}`;

    const cep = document.createElement("p");
    cep.classList.add("address-cep");
    cep.innerHTML = address.cep;

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    return div;
}