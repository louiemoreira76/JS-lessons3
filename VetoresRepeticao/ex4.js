import  prompt  from "prompt-sync";
const ler = prompt();

const numDig = [];
const numDigInverso = []; 
let contInicial = 0;

console.log('Informe a quantidade de números que daseja:');
let qtdNum = Number(ler());

for (let cont = 0; cont < qtdNum; cont++){
    console.log('Informe o número:')
    numDig [cont]  = Number(ler())
}

for(let cont = numDig.length-1; cont >= 0; cont--){
    numDigInverso [contInicial] = numDig [cont]
    contInicial++
}

console.log()
console.log('Você digitou os números:')

for(let item of numDigInverso){
    console.log(item)
}

