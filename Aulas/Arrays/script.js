// TAMANHO DO ARRAY

const valores = ["Maria", 37, false, 1.64];

//valores.length retorna o tamanho do array
const t1 = valores.length;

console.log("Teste length");
console.log(t1);

// REMOVER ELEMENTOS:

const nomes = ["Maria", "João", "Ana", "Marcos"];
//a função pop() remove o ultimo elemento do array
const r1 = nomes.pop();
//a função shift() remove o primeiro elemento do array
const r2 = nomes.shift();

console.log("Teste pop e shift");
console.log(r1);
console.log(r2);
console.log(nomes);

// INSERIR ELEMENTOS:

const alturas = [1.65, 1.82, 1.7];

//a função push() inserer um elemento na ultima posição do array
alturas.push(1.75);

//a função unshift() inserer um elemento na primeira posição do array
alturas.unshift(1.58);

console.log("Teste push e unshift");
console.log(alturas);

// INSERIR E REMOVER GERAL

const letras = ["A", "B", "C", "D", "E", "F"];

//Aparteir da posição 2 eu removi 3 elementos
letras.splice(2, 3);
console.log("Teste splice");
console.log(letras);

//Removeu os elementos aparteir da posição 2 eu removi 3 elementos
// aparti da posição 3 inseriu x, y
letras.splice(2, 3, "X", "Y");
console.log("Teste splice");
console.log(letras);

//Não vai removeu os elementos 
// aparteir da posição 2 
// vai inseriu x, y
letras.splice(2, 0, "X", "Y");
console.log("Teste splice");
console.log(letras);


// CONCATENAR ARRAYS

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

//Concatenar dois array
const todos = meninas.concat(meninos);
console.log("Teste concat");
console.log(todos);

// ACESSO E ATRIBUIÇÃO

const idades = [20, 30, 40, 50];
//Eu estou atualizando a posição 1
//antes o valor era 30
//agora atualiza para 38
idades[1] = 38;

console.log("Teste acesso e atribuição");
console.log(idades);

// PERCORRER ARRAY

const frutas = ["Banana", "Laranja", "Uva"];

console.log("Teste percorrer array");
//Percorrer todo array frutas
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// PERCORRER ARRAY COM FOREACH

console.log("Teste percorrer array com forEach");
//Percorre o array com forEach implementado com função lambda
frutas.forEach(item => {
    console.log(item);
});