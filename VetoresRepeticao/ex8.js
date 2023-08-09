import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []
var letra = ''

console.log('Qual a quantidade de nomes que você quer?')
var qtd = Number(ler())

for(let cont = 0; cont < qtd; cont++){
    console.log('Dale o nome da posição' + cont +1)
    vetor[cont] = ler()
}

console.log(`Esse são os nomes que começam com L`)

for(let cont = 0; cont < qtd; cont++){
    vetor[cont]
    for(let pos = 0; pos < 1; pos++){      
        letra = vetor[cont].charAt(pos)
        if (letra == 'L' || letra == 'l')
        console.log(`${vetor[cont]}`)
    }
}