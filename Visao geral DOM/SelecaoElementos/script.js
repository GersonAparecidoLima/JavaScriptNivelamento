
//querySelector vc colocar o seletor css 
//no caso sera li
//Ele pegou somente o primeiro item
//const item1 = document.querySelector("li");

//console.log(item1);

//console.log(item1.outerHTML);

//vai mostra o html que vc selecionou
//console.log(item1.innerHTML);

//querySelectorAll vc pega todas as orcorencias do seletor css 
//no caso sera todas as  li
//const items = document.querySelectorAll("li");

//console.log(items);
//console.log(items[0].innerHTML);

//percorrendo o li
/*
items.forEach(function (elemento) {
    console.log(elemento.textContent);
});


// Utilizando um loop for para iterar sobre a NodeList
for (var i = 0; i < items.length; i++) {
    var elemento = items[i];
    console.log(elemento.textContent);
}

*/



//querySelector vc colocar o seletor css 
const card1 = document.querySelector('[data-product-id="32"]')

console.log(card1);
console.log(card1.innerHTML);



//Criando um novo elemento
const paragrafo = document.createElement("p");
//Atribuindo um conteudo para o elementeo recem criado
paragrafo.innerHTML = "Descrição";
//Acresentado um elemento recem criado no final
//
card1.appendChild(paragrafo);

//adicionando um css para o elemento recem criado
card1.classList.add("super-border");


const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");

console.log(cards);

//Convertendo o resultado do cards para um array
//Array.from(cards)

//Converte para o array também
//[...cards].map(item => {

Array.from(cards).map(item => {
    console.log(item.innerHTML);
});
