import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []

console.log('Digite os a quantidade de númeors que vc deseja: ')
var qtd = Number(ler())
console.log('')

for(let cont = 0; cont < qtd; cont++){
    console.log('Informe as notas para proseguir')
    vetor[cont] = Number(ler())
}

console.log('')
console.log('Essas são suas notas:')
console.log(vetor.join(' - '))

var MaiorNota = Math.max.apply(null, vetor)

console.log(`A maior nota é ${MaiorNota}`)