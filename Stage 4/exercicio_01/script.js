/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; 

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.*/

let numberOne = Number(
  prompt("Digite o primeiro número para fazermos as operações matemáticas: ")
);
let numberTwo = Number(
  prompt("Digite o segundo número para fazermos as operações matemáticas: ")
);

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`O resultado da soma é: ${sum}`);
alert(`O resultado da subtração é: ${sub}`);
alert(`O resultado da multiplicação é: ${mult}`);
alert(`O resultado da divisão é: ${div.toFixed(2)}`);
alert(`O resto da divisão é: ${rest}`);

if (sum % 2 === 0) {
  alert("A soma dos dois números é par");
} else {
  alert(`A soma dos dois números é impar`);
}

if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais");
} else {
  alert("Os números inseridos são diferentes");
}
