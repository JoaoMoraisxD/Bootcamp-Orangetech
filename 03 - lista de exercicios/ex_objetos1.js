/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, modelo cor, ano, e um gasto medio de combustivel por kilometro rodado.
    Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

const valorCombustivel = 5.29
const distancia = 73;


class carros {
    marca;
    modelo;
    cor;
    ano
    kmPorLitros;

    
    constructor(marca, modelo, cor, ano, kmPorLitros) {
        this.marca = marca ;
        this.modelo = modelo ;
        this.cor = cor ;
        this.ano = ano ;
        this.kmPorLitros = kmPorLitros ;
    }

    valorGasto() {
        console.log(`O carro modelo ${this.modelo} da marca ${this.marca} faz ${this.kmPorLitros} km por litros,  a distancia que voce vai percorrer e ${distancia} km. voce ira gastar R$${(this.kmPorLitros*distancia)*valorCombustivel} . `)
    }
}

const joao = new carros ("Fiat", "Palio", "Prata", 2010, 1/12);

joao.valorGasto()

console.log(joao)