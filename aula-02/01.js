// 1. Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.
//     1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.
//     1.2. Faça o mesmo programa anterior, agora com 3 palpites.


const number = Math.floor(Math.random() * 11);

const guess1 = parseInt(prompt('Digite um número de 1 a 10'));
if (number == guess1) {
    alert('voce acertou');
} else {
    alert('tente de novo');
}

const guess2 = parseInt(prompt('Digite um número de 1 a 10'));
if (number == guess2) {
    alert('voce acertou');
} else {
    alert('suas chances acabaram. o número aleatório era ' + number);
}
