/* Faça um programa para calcular o valor de uma viagem 

Voce tera 3 variaveis. Sendo elas:
1- Preco do combustive;
2- Media de km que o carro faz por litro;
3- Distancia em km da viagem;

*/
const carro = {
    fabricante: "fiat",
    modelo:"Palio 1.0",
    ano:"2010",
};
const preçoCombustivel = 4.82;
const kmPorLitros= 10;
var distanciaEmKm = window.prompt ("Qual distancia vai percorrer");

var valorGasto = (distanciaEmKm/kmPorLitros)*preçoCombustivel;

window.alert (`Voce ira gastar ${valorGasto}R$`)
