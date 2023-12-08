//passo a passo
//const dados = document.getElementById("dados");

//Pegando conteudo dentro do elemento
//const dados = document.getElementById("dados").innerHTML;

//transforma o conteudo em um vetor
//utilizando a quebra de linha => split('\n')
//const dados = document.getElementById("dados").innerHTML.split('\n');

//temos um vetor de string agora vamos tranforma e numero
//para cada elemento eu quero um numero => map(x => Number(x));
const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

console.log(Math.max(...dados));

//Começando o algoritimo para procur o mairo

//pegamos o primerio elemento e atribuimos
//na varialvel  => maior
let maior = dados[0];

//criamos um for para percorrer o array dados
for (let i = 1; i < dados.length; i++) {
    ///para cada elemento do array dados fazemos a comparação 
    // se ele e maior
    //caso encontremos um valor maior atribuimos ele
    //a variavel maior
    if (dados[i] > maior) {
        maior = dados[i];
    }
}

console.log(maior);
