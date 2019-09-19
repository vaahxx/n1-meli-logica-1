// 1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

const palpite1 = parseInt(prompt('Digite um número de 1 a 10'));
if (numero == palpite1) {
    alert('voce acertou!');
} else {
    alert('tente de novo');
    if () {
        console.log(`o número sorteado é maior do que ${palpite1}`)
    }
}

const palpite2 = parseInt(prompt('Digite um número de 1 a 10'));
if (numero == palpite2) {
    alert('voce acertou');
} else {
    alert('suas chances acabaram. o número aleatório era ' + numero);
}