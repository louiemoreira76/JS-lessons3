import  prompt  from "prompt-sync";
const read = prompt();

let vetor = [];
let n = 0;

console.log('Digite a quantidade de numeros que vc quer:');
let qtd = Number(read());


for (let cont = 0; cont < qtd; cont++){
    console.log('Informe o número:')
    vetor [cont]  = Number(read())
}

for(let item of vetor){
    console.log(item)
}