//Vazamento de escopo em estrutura de controler
const x = 10;

if (x > 0) {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log("Imprimindo dentro if");
    console.log(a);
    console.log(b);
    console.log(c);
}

//Vazamento de escopo em estrutura de controler
console.log("Imprimindo fora do if");
console.log(a); // a variavel a esta vazando o escopo
console.log(b);
console.log(c);






