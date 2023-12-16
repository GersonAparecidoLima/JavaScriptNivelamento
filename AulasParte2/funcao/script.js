//Função comum que retorna resultado
function soma1(num1, num2) {
    return num1 + num2;
}
//Função comum que retorna resultado
//Ela e chamada da seguinte forma
//soma2(3,4)
const soma2 = function (num1, num2) {
    return num1 + num2;
}

//Função anonima
//Expressão lambida
//soma3(3,4)
const soma3 = (num1, num2) => {
    return num1 + num2;
}

//Função anonima
//Expressão lambida
//soma3(400)
const soma31 = num1 => {
    return num1;
}

//Função anonima
//Expressão lambida
//com expresão de retorno sem colocar chaves
const soma4 = (num1, num2) => num1 + num2;

//Função anonima
const dobro1 = function (num) {
    return num * 2;
}

//Função anonima
//Expressão lambida
const dobro2 = num => num * 2;


// Funcao que nao tem retorno definido, 
//retorna undefined
function mostrarPreco(preco) {
    console.log(`PRECO = ${preco}`);
}

// Variaveis definidas dentro da funcao pertencem somente ao escopo da funcao

function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}

//para este caso não vasa escopo
//variavel local
//console.log(pi);

// Function hoisting: declaracoes de funcoes sao "movidas" para cima pelo motor do JavaScript
// Function hoisting: teste(5);
// E colocar a chamada antes da função
teste(5);

function teste(x) {
    console.log("TESTE " + x);
}

// Funcoes podem ser passadas como argumento

function triplo(num) {
    return num * 3;
}

//o paramento "f"
//vai ser passado um função
// veja o exemplo aplicar(triplo, 10);
//triplo e uma função que multiplica 
//o numero por 3
function aplicar(f, num) {
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(dobro1, 10);
aplicar(triplo, 10);