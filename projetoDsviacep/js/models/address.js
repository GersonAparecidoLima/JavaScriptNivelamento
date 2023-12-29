//Sempre que vc tiver algum objeto ou entidade(no nosso caso e endereço) do seu negocio
//que vc tem que representar, Crie uma Modal 
//Model para especificar o tipo do endereço
//Classe que representa os dados

//Este model tera as funções construtora para representar os seu dados

export default function Address(cep, street, number, city) {
    this.cep = cep;
    this.street = street;
    this.number = number;
    this.city = city;
}