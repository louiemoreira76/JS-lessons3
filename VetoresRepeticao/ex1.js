import prompt from 'prompt-sync';
const ler = prompt();

let vetor = [];
var qtd = 5;

console.log('Digite cinco numeros inteiros');
let numero = Number(ler());

vetor[0] = numero;

for(let cont = 1; cont < qtd; cont++){
    vetor[cont] = ler();
}

for(let item of vetor){
    console.log(item)
};  