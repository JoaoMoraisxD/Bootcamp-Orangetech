// 1) Faça um programa que receba a media de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
//Caso a média seja >= 5 e < 7 imprima "Recuperação"
//Caso a média seja >= 7 imprima "Aprovado"

//const { gets } = require('./funçoes.js')

//console.log(gets)



const {gets, print}= require('./funçoes_auxiliares');

const nota = gets()

    if (nota < 5) {
        print('Reprovado')
    }else if ( nota >= 5 && nota < 7) {
        print('Recuperação')
    }else {
        print('Aprovado')
    }
    
