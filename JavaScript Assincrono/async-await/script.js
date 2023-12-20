//vamos passar uma url
//a função vai retorna um objeto json
//async que vai fazer a função te o processamento assincrona
async function getJsonResponse(url) {
    //Função que tem o tratamento de processamento assincrona
    //pode demora um pouco
    //O fetch e processo assincrona
    //Codigo linear sem precissar de ficar encadeando .then
    const response = await fetch(url);
    //await faz com que a chamada de forma assincrona
    //sem prejudicar o programa que ele continua rodando
    const jsonBody = await response.json();
    //restorna o response.json => json
    //o que await esta falando so depois que resolver a propride e que vc retorna a responsta
    return jsonBody;
}

console.log(getJsonResponse("https://viacep.com.br/ws/01001000/json/"));
//1 forma de apresenta o resultado
// O .then ele espera primeiro resolvar a propride, e depois apresenta a resposta
getJsonResponse("https://viacep.com.br/ws/01001000/json/").then((obj) => {
    //Lembrando que a função console.log é sincrona
    console.log(obj);
});

//2 forma de apresenta o resultado
async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    //como a função getJsonResponse é async
    //eu tenho que aplicar await antes da chamada da função getJsonResponse
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData("01001000");