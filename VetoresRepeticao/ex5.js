import prompt from 'prompt-sync';
const ler = prompt();

let vetor = [];
console.log('digite um número para serr mostrado a tabuada');
let n = Number(ler())


for(let cont = 0; cont < 11; cont++){
    vetor[cont] = n * cont
}

for(let item of vetor){
    console.log(item)
}