function dizerOla() {
    console.log("Ola!");
}

function dizerBomDia(nome) {
    console.log(`Bom dia ${nome}!`);
}

function dizerBoaTarde(nome) {
    console.log(`Boa tarde ${nome}!`);
}

function dizerBoaNoite(nome) {
    console.log(`Boa noite ${nome}!`);
}

//2000 representa 2 segundos
//setTimeout(dizerOla, 2000);

/*
//Função anonima sem argumento setTimeout(() =>
//com expresão lambida
 
setTimeout(() => {
  //aqui fica uma logica
  //corpo da expresão lambida
  dizerBomDia("Maria");
}, 2000);
*/

//Encadeando o setTimeout
//para executar a função a cada 1 segundos
setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBoaTarde("Joao");
        setTimeout(() => {
            dizerBoaNoite("Ana");
        }, 1000);
    }, 1000);
}, 1000);

console.log("A");
console.log("B");