// // // // // // // // // // // // // // // // // 
//----------- Sintaxe básica em JS? ------------// 
// // // // // // // // // // // // // // // // // 
/*
  1 - Como funciona a tipagem em JS;
  2 - O que são variáveis e como declarar;
  3 - Diferenças entre atribuição, comparação e comparação identica;
  4 - Operadores aritméticos, relacionados e lógicos;
*/
// // // // // // // // // // // // // // // // // 
//------ Como funciona a tipagem em JS? --------// 
// // // // // // // // // // // // // // // // // 
/*
  A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado.
  A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.
  Ex.: Ao criarmos uma variável com valor entre aspas ("valor"), o JavaScript já converte o dado para o tipo String.
  Ex.: var numero = 1;
  // o JavaScript já converte o valor 1 para o tipo Number.
*/
// // // // // // // // // // // // // // // // // 
//---- O que são variáveis e como declarar? ----// 
// // // // // // // // // // // // // // // // // 
/*
  São dados que variam.
  As variáveis em JS podem guardar tipos de dados que chamamos de tipos primitivos
  Variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.
*/
// Tipos primitivos
// Boolean
  var vOuF = false;
  console.log(typeof vOuF);
// Number
  var num = 13;
  console.log(typeof num);
// string
  var txt = "txt";
  console.log(typeof txt);
// function
  var funcao = funcao(()=>{});
  console.log(typeof funcao);
/**
  Existem 3 modos de declarar as variáveis em JavaScript:

  var - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
  let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
  const - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.
*/
// Como declarar
  var variavel = "Variável var";
  console.log('valor inicial', variavel)
  variavel = 'escopo global e local que pode ser alterado.'
  console.log('valor alterado', variavel)
  
  let variavel2 = "Variável let";
  console.log('valor inicial', variavel2)
  variavel = 'escopo local de bloco que pode ser alterado.'
  console.log('valor alterado', variavel2)

  const variavel3 = "Variavél const"
  console.log('valor não pode ser alterado', variavel3)

/**
  Escopo em JavaScript define a limitação e visibilidade de um bloco de código.
  Escopo global - é quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.
  Escopo local - é quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não. 
*/
// Escopo global
var escopoGlobal = 'Global';
console.log(escopoGlobal);
// Escopo local
function escopoLocal() {
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}

/*
  Regras de Uso de variáveis

  Iniciar com letra, undescore _ ou cifrão $; 
  Não iniciar com número.
  Ex.:  
  var 1nome - errado
  var nome || var _nome - correto
  
  Não usar espaços (use o camelCase ou _);
  Ex.:
  var nome completo - errado
  var nomeCompleto || var nome_completo

  Não usar palavras reservadas;
  Ex.:
  var function - errado
  
  Declarar variáveis no topo do bloco de código.

*/

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
//----------------- Diferenças entre atribuição, comparação e comparação identica; ----------------// 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Atribuição
var atribuicao = 'atribuição';

// Comparação
var comparacao = '0' == 0;
console.log ('Aqui retorna true, pois a comparação é apenas se o valor são iguais',comparacao);

// Comparação identica
var comparacaoIdentica = '0' === 0;
console.log ('Aqui retorna falso, pois a comparação é se tanto o tipo quanto o valor são iguais',comparacaoIdentica);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
//----------------- Operadores aritméticos, relacionados e lógicos; ----------------// 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
/*
  Operadores aritméticos são tipos de operadores matemáticos com valor numérico:
  + adição;
  - subtração;
  * multiplicação;
  / divisão real;
  % divisão inteira;
  ** potenciação;
*/
// Exs.:
// adição
  var adicao = 1 + 1;
  console.log(adicao);
// subtração
  var subtracao = adicao - 1;
  console.log(subtracao);
// multiplicação
  var multiplicacao = adicao * adicao;
  console.log(multiplicacao);
// divisão real
  var divisaoReal = multiplicacao / adicao;
  console.log(divisaoReal);
// divisão inteira
var divisaoInteira = divisaoReal % adicao;
console.log(divisaoInteira);  
// potenciação
var potenciacao = adicao ** 10;
console.log(potenciacao);  
// 
/*
  Operadores aritméticos são tipos de operadores que consultam a relação entre valores:
  > maior que;
  < menor que;
  >= maior ou igual a;
  <= menor ou igual a;
*/
// Exs.:
// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);
// Menor que
var menorQue = 5 < 2;
console.log(menorQue);
// Maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);
// Menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);
// 
/*
  Operadores lógicos são tipos de operadores que consultam valores lógicos:
  && - "e" - considera que todos os valores sejam true;
  || - "ou"- considera que qualquer valor seja true;
  ! - "não"- inverte o valor de true para false ou vice-versa.
*/
// Exs.:
// && == E
var e = true && false;
console.log(e);
// || == ou
var ou = true || false;
console.log(ou);
// Maior ou igual
var nao = !true;
console.log(nao);