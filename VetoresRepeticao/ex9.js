import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []
var soma = 0

console.log('Digite a quantidade de notas que você deseja amarzenar: ')
var qtd = Number(ler())
console.log('')

for(let cont = 0; cont < qtd; cont++){
    console.log('Digite a nota:')
    vetor[cont] = Number(ler())
}

console.log('')
console.log('Notas que foram digitadas:')
console.log(vetor.join(' - '))

for(let item of vetor){ 
    soma = item + soma
}

var media = soma / qtd
console.log(`Essa a média tirada desses valores ${media}`)