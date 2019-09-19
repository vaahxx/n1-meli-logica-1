// o número é par ou ímpar? 

const numero = parseInt(prompt('digite um número para saber se ele é par ou ímpar'));

if (numero % 2 == 0) {
    alert(`o ${numero} é par`);
} else {
    alert(`o ${numero} é impar`);
}