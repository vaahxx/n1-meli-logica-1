// 1. Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

const numero = Math.floor(Math.random() * 11);

const palpite1 = parseInt(prompt('Digite um número de 1 a 10'));
if (numero == palpite1) {
    alert('voce acertou');
} else {
    alert('tente de novo');
    //SEGUNDA TENTATIVA
    const palpite2 = parseInt(prompt('Digite um número de 1 a 10'));
    if (numero == palpite2) {
        alert('voce acertou');
    } else {
        alert('suas chances acabaram. o número aleatório era ' + numero);
    }
}

