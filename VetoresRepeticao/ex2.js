import  prompt  from "prompt-sync";
const read = prompt();

let vetor = [];
let qtd = 5;

console.log('Digite cinco nomes para eu mostrar');
let nome = read();

vetor[0] = nome;

for(let cont = 1; cont < qtd; cont++){
    vetor[cont] = read()
};

for(let item of vetor){
    console.log(item)
};

