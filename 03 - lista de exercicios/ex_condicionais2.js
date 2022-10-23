const peso = 50;
const altura = 1.70;
const imc = peso / Math.pow(altura,2);

console.log (imc);

if(imc < 18.5) {
    alert('Abaixo do peso');
}else if (imc >= 18.5 && imc < 25) {
    alert('peso normal');
}else if (imc >=25 && imc < 30) {  
    alert ('Acima do peso');
}else if (imc >= 30 && imc < 40) {
    alert ('Obeso');
}else {
    alert ('Obesidade grave');
}