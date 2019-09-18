// qual é o maior número? 

const n1 = parseInt(prompt('digite um número'));
const n2 = parseInt(prompt('digite outro número'));

if (n1 == n2) {
    alert(`Os números são iguais`);
} else {
    if (n1 > n2) {
        alert(`O número ${n1} é maior que ${n2}`); 
    } else {
        alert(`O número ${n2} é maior que ${n1}`);
    }
}   