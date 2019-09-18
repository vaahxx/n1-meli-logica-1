// o número é múltiplo de 10?

const number = parseInt(prompt('digite um número para saber se ele é múltiplo de 10'));

if (number % 10 == 0) {
    alert(`${number} é múltiplo de 10`);
} else {
    alert(`${number} não é múltiplo de 10`);
}