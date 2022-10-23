/* Faça um programa para calcular o valor de uma viagem

Voce tera 3 variaveis, sendo elas:
1- Preço do etanol;
2- Preco da gasolina;
3- O tipo de gasolina que esta no seu carro;
4- gasto medio de combustivel do carro por KM;
5- Distancia em KM da viagem;

Imprimir o valor que sera gasto para realizar esta viage.*/
window.alert ('Iremos calcular os gastos com combustivel na sua viagem. ;)')

const carro = {
    fabricante: "fiat",
    modelo:"Palio 1.0 flex",
    ano:"2010",
};
const preçoGasolina = 6.88;
const preçoEtanol = 4.35
const kmPorLitros= 10;

var distanciaEmKm = window.prompt ("Qual distancia em km voce ira percorrer ? ");

var tipoDeCombustivel = window.prompt ('Se esta usando etanol digite "Etanol" | Se esta usando gasolina digite "Gasolina')
if (tipoDeCombustivel === 'Gasolina') {
    var combustivelUtilizado = preçoGasolina
    var valorGasto = (distanciaEmKm/kmPorLitros)*combustivelUtilizado;
    window.alert (`Voce esta utilizando gasolina entao ira gastar ${valorGasto}R$`)
}else {
    var combustivelUtilizado = preçoEtanol
    var valorGasto = (distanciaEmKm/kmPorLitros)*combustivelUtilizado;
    window.alert (`Voce esta utilizando etanol entao ira gastar ${valorGasto}R$`)
}

