/*
2)  Crie uma classe para representa pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter capicidade de dize o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada jose que tenha 70kg de peso e 1,75 de altura e peça jose para dizer o valor do seu IMC;
*/

class Pessoa {
    Nome;
    Peso;
    Altura;

    constructor(Nome, Peso, Altura){
        this.Nome = Nome;
        this.Peso = Peso;
        this.Altura = Altura;
    }

    calcularIMC() {
        return this.Peso / (this.Altura * this.Altura);

        console.log(`Ola ${this.Nome}. Seu peso e ${this.Peso}kg e sua altura e ${1.75}m²`)
    }
}

const jose = new Pessoa ('Jose Pereira', 70, 1.75);

console.log(joao.calcularIMC)