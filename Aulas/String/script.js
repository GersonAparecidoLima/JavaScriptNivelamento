console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
//Exemplo abaixo de interpolação
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");
//Convertando para string com num.toString()
const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);
//Convertendo para string com duas casas decimais
const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

//Convertendo string para numero
const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

//Convertendo string para numero inteiro, com a base numerica no caso
// e decimal
const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

//Base hexadecimal
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

//Convertendo string para numero quebrado, com a base numerica no caso
// e decimal
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);

console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

//convert para minuscula
console.log(`toLowerCase: ${str.toLowerCase()}`);

//convert para maiuscula
console.log(`toUpperCase: ${str.toUpperCase()}`);

//Pegando o caracter na posição 3, lembrando que o array começã com 0
console.log(`charAt: ${str.charAt(3)}`);
console.log(`charAt: ${str[3]}`);

//replace troca a primeira ocorrencia  do i para $
console.log(`replace (primeiro): ${str.replace("i", "$",)}`);

//replace para trocar todas as ocorrencia do i
//Foi utilizado uma expresão regular
console.log(`replace (todos): ${str.replace(/i/g, "$",)}`);

//Pegar o tamanhor da string
console.log(`length: ${str.length}`);

//Onde esta a primeira ocorrencia da letra i
console.log(`indexOf: ${str.indexOf("i")}`);

//Onde esta a ultima ocorrencia da letra i
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

//subtring recorta pedaço da string
//no caso abaixo ele vai corta da posição 3 em diante
console.log(`subtring: ${str.substring(3)}`);

//subtring recorta pedaço da string
//no caso abaixo ele vai corta da posição 3 até a posição 8
console.log(`subtring: ${str.substring(3, 8)}`);

//Apagando espço em branco no início e no final
console.log(`trim: ${str.trim()}`);





