import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []
var letra = ''

console.log('Digite a quantidade de números que vc quer: ')
var qtd = Number(ler())

for(let cont = 0; cont < qtd; cont++){
    console.log(`Digite o nome que vc deseja ${cont +1}º`)
    vetor[cont] = ler()
}

console.log('')
console.log('Esse são os números com o filtro de L e H:')

for(let cont = 0; cont < qtd; cont++){
    for(let pos = 0; pos < 1; pos++){
        letra = vetor[cont].charAt(pos)
        if(letra == 'l' || letra == 'L' || letra == 'H' || letra == 'h')
        console.log(vetor[cont])
    }
}

