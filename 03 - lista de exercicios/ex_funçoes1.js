alert ('Vamos conferir sua idade');


function conferenciaIdade (idade, nome){
    if (idade >= 18 ) {
        alert (`${nome} e Maior de idade.`);
    }else {
        alert (`${nome} e Menor de idade.`);
    }
}

conferenciaIdade(18, 'Joao');