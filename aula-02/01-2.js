// 1.2. Faça o mesmo programa anterior, agora com 3 palpites

const numero = Math.floor(Math.random() * 11);

const palpite1 = parseInt(prompt('Digite um número de 1 a 10'));
if (numero == palpite1) {
    alert('voce acertou!');
} else {
    alert('tente de novo');
    if (numero > palpite1) {
        alert(`o número sorteado é MAIOR do que ${palpite1}`)
    } else {
        alert(`o número sorteado é MENOR do que ${palpite1}`)
    }
}

const palpite2 = parseInt(prompt('Digite um número de 1 a 10'));
if (numero == palpite2) {
    alert('voce acertou!');
} else {
    alert('tente de novo');
    if (numero > palpite2) {
        alert(`o número sorteado é MAIOR do que ${palpite2}`)
    } else {
        alert(`o número sorteado é MENOR do que ${palpite2}`)
    }
}

const palpite3 = parseInt(prompt('Digite um número de 1 a 10'));
if (numero == palpite3) {
    alert('voce acertou');
} else {
    alert('suas chances acabaram. o número aleatório era ' + numero);
}