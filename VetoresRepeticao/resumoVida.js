import prompt from 'prompt-sync';
const ler = prompt();


// MANDAR MENSAGEM PRO USUARIO
console.log('oiii');

// LER MENSAGEM DO USUARIO
let aa = ler();


// CRIAR E ALTERAR VARIAVEIS
let a = 10;
a = 9;


// REALIZAR CALCULOS MATEMATICOS
let b = a + 2;
let c = (a + b) * 2;

// REALIZAR CALCULOS COMPARACAO
let d = a != 4;  //booleano= true, false

// COMBINAR DUAS COMPARACOES
let e = a > 0 || b < 0;


// É POSSÍVEL DECIDIR QUAL BLOCO SERÁ EXECUTADO
if (a == 7) {
  console.log('oiii');
}
else if (a == 6) {

}
else if (a == 5) {
  
}
else {

}

// É POSSÍVEL REPETIR O MESMO CÓDIGO
for (let cont = 0; cont < 5; cont++) {
  //......
}


let cont = 1;
while (cont < 5) {
  //.....
  cont++;
}


// GUARDAR MUITOS VALORES EM UMA UNICA VARIAVEL
let vet = [10, 20, 30, 40, 50, 44];

let tam = vet.length;

let p = vet[1];

vet[2] = 0;


// VETOR + REPETICAO

for (let cont = 0; cont < vet.length; cont++) {
  let item = vet[cont];

  console.log(item);
}


for (let item of vet) {
  console.log(item);
}







let cont = 4; 

do {
  console.log(cont);

  cont++;
}
while (cont <= 3);