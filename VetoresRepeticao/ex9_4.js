import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []
var soma = 0

console.log('Digite a quantiade de números que você deseja:')
var qtd = Number(ler())

for(var cont = 0; cont < qtd; cont++){
    console.log('Digite os valores para a análise:')
    vetor[cont] = Number(ler())
}

console.log('')
console.log('Notas que foram digitadas:')
console.log(vetor.join(' - '))
console.log('')

for(let item of vetor){ 
    soma = item + soma
}


var media = soma / qtd
const Maior = Math.max.apply(null, vetor)
const Menor = Math.min.apply(null, vetor)

console.log(`A média foi ${media.reverse()}, A maior nota foi ${Maior} e A menor nota foi ${Menor}`)

