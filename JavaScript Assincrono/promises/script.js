//Esta função f por sua vez recebe como argumento duas funções g e h (opcional).
function f(g, h) {

    //simulando um comportamento assicriono
    setTimeout(() => {
        //uma simples simulação
        if (10 < 0) {
            //a função g for chamada com o argumento P (opcional), 
            //então o estado da promise mudará para "fulfilled" (resolvida), 
            //e o resultado da promise será o valor P.
            g("P");
        }
        else {
            // a função h for chamada com o argumento Q (opcional), 
            // então o estado da promise mudará para "rejected" (rejeitada), 
            //e o resultado da promise será o valor Q.
            h("Q");
        }
        //aguardando 3 segundo
    }, 3000);
}

//Promise recebe uma função f como argumento.
const minhaPromise = new Promise(f);

minhaPromise
    //O método then de uma promise recebe como argumento uma função, 
    //e executa esta função passando o valor P para ela, quando a 
    //promise for resolvida.
    .then(valor => {
        console.log("Resolveu com o valor " + valor);
    })
    //O método catch de uma promise recebe como argumento uma função, 
    //e execute esta função passando o valor Q para ela, quando a promise for rejeitada.
    .catch(valor => {
        console.log("Rejeitada com o valor " + valor);
    });

console.log(minhaPromise);