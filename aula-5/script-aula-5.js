// // // // // // // // // // // // // // // // // 
//-------- Estruturas condicionais -------------// 
// // // // // // // // // // // // // // // // // 
/*
  Palavras reservadas para condicionais
  If = se
  else = se não
  else if = se não se (nova condição)

  switch = estrutura condicional para diversos casos.

  For
  For/in
  For/of
  While
  Do/While

*/
// Exemplos
var jogador1 = 0;
var jogador2 = 0;
var placar;

// if ternário
var jogadoresValidos = jogador1 !== -1 && jogador2 !== -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');

// ninho de if
if (jogadoresValidos){
  if (jogador1 > 0){
    console.log("Jogador 1 marcou ponto");
  } else if (jogador2 > 0){
    console.log("Jogador 2 marcou ponto");
  } else {
    console.log("ninguém marcou ponto");
  }
}

// switch case
switch (placar) {
  case placar = jogador1 > jogador2:
    console.log('Jogador 1 ganhou');
    break;
  case placar = jogador1 < jogador2:
    console.log('Jogador 2 ganhou');
    break;
  case placar = jogador1 == jogador2:
    console.log('Ninguém ganhou, foi empate');
    break;

  default:
    break;
}

// Arrays e laços de repetição
let array = ['v1', 'v2', 'v2', 'v4', 'v5'];
let object = {
  prop1: 'v1',
  prop2: 'v2',
  prop3: 'v3'
};

// laço for executa uma instrução até que ela seja falsa
for (let i = 0; i < array.length; i++) {
  console.log('indice', i);
}

// laço for/in executa repetição a partir de uma propriedade
// com array
for(let i in array) {
  console.log('indices', i)
}
// com object
for(i in object) {
  console.log('objects', i)
}

// laço for/of executa repetição a partir de valor
// com array
for(i of array) {
  console.log('valor de cada indice', i)
}

// laço while executa repetição enquanto for verdadeira
// com array
var a = 0;
while (a < 10) {
  a++; // ++ = incrementa a cada loop (soma +1)
  console.log('valor incrementado', a)
}

// laço Do/while executa repetição enquanto for verdadeira
// com array
var a = 0;
do {
  a++; // ++ = incrementa a cada loop (soma +1)
  console.log('valor incrementado do while', a)
} while (a < 10) 
