

const {gets, print}= require('./funçoes_auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteados);
    
}

let mairoValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteados > mairoValor) {
        mairoValor = numerosSorteados;
    }
}

print(mairoValor)