import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []

console.log('Digite a quantiade de números que você deseja: ')
var qtd = Number(ler())
console.log('')

for(let cont = 0; cont < qtd; cont++){
    console.log('Então digite as notas para a análise')
    vetor[cont] = Number(ler())
}

console.log('')
console.log('Essas são as suas notas')
console.log(vetor.join(' - '))

var MenorNota = Math.min.apply(null, vetor)

console.log('A menor nota é ' + MenorNota)