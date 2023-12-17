//Definindo uma class
class Product {
    //Definindo um construtor
    //Definindo a função quando vc criar
    constructor(name, price, quantity) {
        //Propriedade atributos
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //Metodo
    total() {
        //this refencia um membro do objeto
        //price e quantity este atributo ou propriedade        
        return this.price * this.quantity;
    }

    //Metodo
    add(amount) {
        this.quantity += amount;
    }

    //Metodo
    remove(amount) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
        }
    }

    //Metodo
    label() {
        return "Dados: " + this.name + ", " + this.price.toFixed(2);
    }
}

const p1 = new Product("Monitor", 800.0, 10);

const p2 = new Product("Mouse", 50.0, 4);