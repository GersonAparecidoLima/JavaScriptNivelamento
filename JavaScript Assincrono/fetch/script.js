const cep = "01001000";

//fetch por padrão ele faz um get na url que vc passar
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
    .then((response) => {
        console.log("SUCESSO NO FETCH", response);

        //retorna proprie json()
        const json = response.json();
        json
            //acessando o corpo da resposta
            //apresentando o json
            .then((response) => {
                console.log("SUCESSO NO JSON", response);
            })
            //Tratando erro
            .catch((error) => {
                console.log("ERRO NO JSON", error);
            });
    })
    .catch((error) => {
        console.log("ERRO NO FECTH", error);
    });

console.log("A");
console.log("B");