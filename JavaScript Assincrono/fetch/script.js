const cep = "01001000";

//1 faço um fetch
//fetch por padrão ele faz um get na url que vc passar
//A responsta do fetch assicrona
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
    //2 faço o then((response)
    .then((response) => {
        console.log("SUCESSO NO FETCH", response);

        //retorna proprie json()
        //3 chama a função json, que retorna outra propriedes
        const json = response.json();
        json
            //acessando o corpo da resposta
            //apresentando o json
            //4 este response que o json
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