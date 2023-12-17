const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}
//Funções construtoras instanciam objetos com uma estrutura pré-definida.
//Product e o nome de uma função

const Product = function (name, price, quantity) {
    //A palavra chave this é uma 
    //referência para o próprio objeto.
    //Definido propriedade ou artributos
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function () {
    //Definicção do Metodo total
    //Acessando os atributos price e quantity
    //Pegando o price do obejto vezes a quantity
    return this.price * this.quantity;
}

Product.prototype.add = function (amount) {
    //Metodo que adiciona quantia 
    this.quantity += amount;
}

Product.prototype.remove = function (amount) {
    //Metodo que remove quantia 
    if (this.quantity >= amount) {
        this.quantity -= amount;
    }
}

Product.prototype.label = function () {
    //Metodo que retorna os dados em forma de string
    //toFixed duas casa decimal
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
}

//Instanciando um novo objeto
const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);