// // // // // // // // // // // // // // // // // 
//------------ Vetores e Objetos ? -------------// 
// // // // // // // // // // // // // // // // // 
/*
  1 - O que são vetores ou arrays;
  2 - Como manipular arrays;
  3 - O que são objetos;
  4 - Como desestruturar objetos;
*/
// // // // // // // // // // // // // // // // // 
//------- O que são vetores ou arrays ? --------// 
// // // // // // // // // // // // // // // // // 
/*
  Array são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.
  Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo algum valor.
  Array deve ser declarado entre colchetes "[]", e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays.

  Ex.:
  let array = ['string', 1, true]

  Ex.:
  let arrayMultidimensional = ['string', 1, true, false, ['array1'], ['array2']...]

  Obs.: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.

*/
// // // // // // // // // // // // // // // // // 
//----------- Como manipular arrays? -----------// 
// // // // // // // // // // // // // // // // // 
/*
  Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.
  
  forEach() - itera um array;
  push() - adiciona um item no final do array;
  pop() - remove item no final do array;
  shift() - remove item no início do array;
  unshift() - adiciona item no início do array;
  indexOf() - retorna o índice de um valor;
  splice() -  remove ou substitui um item pelo índice;
  slice() - retorna uma parte de um array existente;
  
*/
// Exemplos
let arrayMultidimensional = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

// forEach
arrayMultidimensional.forEach(function(indice, item){
  console.log(item, indice)
})

// push
arrayMultidimensional.push('novo item');
console.log(arrayMultidimensional);

// pop
arrayMultidimensional.pop();
console.log(arrayMultidimensional);

// shift
arrayMultidimensional.shift();
console.log(arrayMultidimensional);

// unshift
arrayMultidimensional.unshift('novo item no inicio');
console.log(arrayMultidimensional);

// indexOf
console.log(arrayMultidimensional.indexOf([true]));

// splice
arrayMultidimensional.splice(0, 3);
console.log(arrayMultidimensional);

// slice
let novoArray = arrayMultidimensional.slice(0, 3);
console.log(novoArray);

// // // // // // // // // // // // // // // // // 
//------------- O que são objetos? -------------// 
// // // // // // // // // // // // // // // // // 
/*
  Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}"

  Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. sendo declarado assim:

  var xicara = {
    cor: 'Azul',
    tamanho: 'P',
    funcao: tomarCafe()
  }

//
//
// Manipulando objetos

  As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

  Ex.: 
  var cor = xicara.cor;
  var tamanho = xicara.tamanho;
  var funcao = tomarCafe();

*/
// Exemplos
let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array'],
  insideObject: {
    propInsideObject: 'propInsideObject '
  }
};
console.log(object)

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, insideObject} = object;
console.log(string, boolean, insideObject);
