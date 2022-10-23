/*
OBJETO

Um objeto javascript e uma coleçao dinamica de chave e valor
*/
class Pessoa {
    Nome;
    Idade;
    AnoDeNascimento;
    Altura;
    Estado;
    Cidade;
    Esporte;

    constructor(Nome,Idade,Altura,Estado,Cidade,Esporte) {
        this.Nome = Nome;
        this.Idade = Idade;
        this.AnoDeNascimento = 2022 - Idade;
        this.Altura = Altura;
        this.Estado = Estado;
        this.Cidade = Cidade;
        this.Esporte = Esporte;
    }

    descerver(){
        console.log(`Meu nome e ${this.Nome} Tenho ${this.Idade} Anos de idade. Atualmente moro no estado do ${this.Estado} na cidade de ${this.Cidade} e meu esporte favorito e andar de ${this.Esporte}.`)
    }
}

// Classe e a definiçao e Instancia a ocorrencia

const Joao = new Pessoa('Joao Morais', 22, 1.89, "Rio de Janeiro", "Sao Pedro da Aldeia", 'Skate');


const Lissandro = new Pessoa();
Lissandro.Nome = "Lissandro M Rocha";
Lissandro.Idade = 23;
Lissandro.Altura = 1.70;
Lissandro.Estado = "Minas Gerais";
Lissandro.Cidade = "Belo Horizonte";
Lissandro.Esporte = "Skate";

console.log (Joao);
Joao.descerver();
console.log (Lissandro);
Lissandro.descerver();

function comparadorIdade (p1, p2){
    if (p1.Idade > p2.Idade){
        console.log(`${p1.Nome} e mais velho do que ${p2.nome}.`);
    }else if (p2.Idade > p1.Idade){
        console.log(`${p2.Nome} e mais velho do que ${p1.Nome}`);
    }else{
        console.log(`${p1.Nome} e ${p2.Nome} Tem a mesma idade.`);
    }
}

comparadorIdade(Joao, Lissandro)
/*
const pessoa = {
    Nome: "Joao Morais",
    Idade: 22,
    Altura: 1.89,
    Estado: "Rio de Janeiro",
    Cidade: "Sao Pedro da Aldeia",
    Esporte: "Skate",
    descerver: function () {
        console.log(`Meu nome e ${this.Nome}Tenho ${this.Idade} Anos de idade. Atualmente moro no estado do ${this.Estado} na cidade de ${this.Cidade} e meu esporte favorito e andar de ${this.Esporte}.`)
    }
};



pessoa.descerver()
*/