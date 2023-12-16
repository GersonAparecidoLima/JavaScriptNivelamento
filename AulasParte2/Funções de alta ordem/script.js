const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];

// ------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, 
// retornando uma nova coleção com os elementos alterados

function dobro(x) {
    return x * 2;
}

function triplo(x) {
    return x * 3;
}

//o list1 vamos utilizar a função mpa
//na função map vamos passa como referencia a função dobro
//resultado desta operação 
//cada elemento do array ser multiplicado por 2
const m1 = list1.map(dobro);

//o list1 vamos utilizar a função mpa
//na função map vamos passa como referencia a função triplo
//resultado desta operação 
//cada elemento do array ser multiplicado por 3
const m2 = list1.map(triplo);

//Expressão anonima
//utiliznado expresão lambda
//resultado desta operação 
//cada elemento do array ser multiplicado por 2
const m3 = list1.map(x => x * 2);

console.log("MAP ------------------------");
console.log(m1);
console.log(m2);
console.log(m3);

// ------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas 
// aqueles elementos da coleção original que 
// satisfazem um dado predicado
//predicado e uma função que retorna verdadeiro ou falso

//verifica se o paramentro passado e par
//retorna verdadeiro ou falso
//retornando o mod x % 2 == 0;
function par(x) {
    return x % 2 == 0;
}

//filtrando somente os muneros pares
//do array list1
const f1 = list1.filter(par);

//filtrando somente os muneros pares
//do array list1
// utilizando expressão lambda
const f2 = list1.filter(x => x % 2 == 0);

//Filtra somente os valores 
//do array list1 maior que 2
const f3 = list1.filter(x => x > 2);

console.log("FILTER ------------------------");
console.log(f1);
console.log(f2);
console.log(f3);

// -------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de 
// uma coleção, retornando o resultado final cumulativo.
// * você pode informar, opcionalmente, um valor inicial como 
// parâmetro (necessário para coleção vazia).

function soma(x, y) {
    return x + y;
}

function produto(x, y) {
    return x * y;
}

//o list1 vamos utilizar a função reduce
//na função reduce vamos passa como referencia a função soma
//resultado desta operação 
//cada elemento do array ser somado tendo com resultado 10
const r1 = list1.reduce(soma);

//no casso de um array vazio 
//e importante passar o segundo parametro
//na soma o elemento neultro e 0
const r2 = list2.reduce(soma, 0);

//Nesta cassor o array list1
//na função reduce vamos passa como referencia a função produto
//produto multiplica os elementos
//o resultado desta operação 24
//na multiplicação o elemento neutro e 1
const r3 = list1.reduce(produto, 1);

console.log("REDUCE ------------------------");
console.log(r1);
console.log(r2);
console.log(r3);

// ------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação 
// informada como parâmetro

function compararPorTamanho(s1, s2) {
    // nesta função ela recebe string 1 e string 2
    // compara as strings e o resultado 
    // retorna um numero de caracter ou tamanho
    return s1.length - s2.length;
}

console.log("SORT -----------------------------");

//Nesta aplicação o sort ordena por ordem alfabetica
// Lembrando que o sort altera o array original
const s0 = nomes.sort();
console.log('s0 ' + s0);

//utilizando [...nomes] vc faz um clone
//com isto não altera o array original
//preserva o array original
const s1 = [...nomes].sort();
console.log(s1);

// Ordenando por tamnho
// pelo o numero de caracter

const s2 = [...nomes].sort(compararPorTamanho);
console.log('s2 ' + s2);

//Vamos utilizar uma expressão lambda
//Ordenar por tamanho
const s3 = [...nomes].sort((x, y) => x.length - y.length);
console.log(s3);