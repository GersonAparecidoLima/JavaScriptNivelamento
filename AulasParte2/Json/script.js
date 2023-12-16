//Trafegando objetos no js
// para usar somente no js
const produto = {
    name: "Computador",
    price: 300.9

}

//Trafegando objetos json fora do js
//e tambem no js
const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

//Trafegando objetos no js
const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
}


//Objetos abrimos com {
const obj3 = {
    id: 53,
    date: "2021-10-20",
    //Array abrimos com [
    items: [
        //Dentro do array temos outros objetos
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    //Cliente e outro objeto que esta alinha aqui também
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        //json aceita valor true false e null
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);

//parse / stringify

// Estamos utilizando a crase
//Este json não e um objeto js
const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

//Convertendo este json para um 
//obj javascript
const obj = JSON.parse(txt);

//Convertendo objeto js para texto json
const text = JSON.stringify(obj);