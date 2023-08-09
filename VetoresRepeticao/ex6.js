import  prompt  from "prompt-sync";
const ler = prompt()

let vetor = []

console.log('Digite a quantidade de númeors que vc deseja:')
var qtd = Number(ler())

for(let cont = 0;cont < qtd; cont++){
    console.log('Digite os valores que vc quer multiplicar')
    vetor[cont] = Number(ler())
}

for(let item of vetor){
    console.log('numeros digitados '+ item)
}

console.log()

for(let item of vetor){
    console.log('O dobro dos valores ' + item * 2)
}