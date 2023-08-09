import prompt from 'prompt-sync';
const ler = prompt();

let vet = [10, 20, 30, 40, 50, 44];

for (let cont = 0; cont < vet.length; cont++) {
    let item = vet[cont];
  
    console.log(item);
  }
  
  console.log('')
  
  for (let item of vet) {
    console.log(item);
  }
   let x = vet[vet.length -1];

   console.log(x)

   // Tamanho de length tem combinar com o tamanho da array, usando o 0 ou -1