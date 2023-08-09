import prompt from 'prompt-sync';
const ler = prompt();

let vetor = []


console.log('Digite a quantidade de númeors que vc deseja:')
let qtd = Number(ler())

for (let cont = 0; cont < qtd; cont++) {
    console.log('Digite o valor de cada posição:')
    vetor[cont] = Number(ler())
}

for(let item of vetor){
    console.log('numeros digitados ' + item)
}
console.log()

for(let item of vetor){
    if(item % 2 === 0)
    console.log('numeros que vc digitou ' + item)
}



