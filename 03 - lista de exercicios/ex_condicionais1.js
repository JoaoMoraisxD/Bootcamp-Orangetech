/* 
    1) faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a sua media e asua classificaçao conforme a tabeka abaixo

    media = (nota 1 + nota 2 + nota 3) / 3;

    classificaçao
    - media menor que 5 reprovado;
    - media entre 5 e 7, recuperaçao;
    - media acima de 7,passou de semestre
*/

window.alert('Calculador de media.');

let nota1 = 7

let nota2 = 7

let nota3 = 8

let media = (nota1 + nota2 + nota3) / 3;

if(media < 5) {
    alert ('Reprovado')
}  else if (media >= 5 && media <= 7) {
    window.alert('Recuperaçao ');
} else {
    alert('Aprovado');
} 