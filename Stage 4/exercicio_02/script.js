/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e
 mostre uma mensagem na tela. */

const students = [
  {
    name: "João",
    firstGrade: 6,
    secondGrade: 8,
  },
  {
    name: "Maria",
    firstGrade: 10,
    secondGrade: 8,
  },
  {
    name: "Marcos",
    firstGrade: 2,
    secondGrade: 1,
  },
  {
    name: "Beatriz",
    firstGrade: 8,
    secondGrade: 8,
  },
];

const averageGradesCalculator = (firstGrade, secondGrade) => {
  return (firstGrade + secondGrade) / 2;
};

for (let student of students) {
  let averageGrades = averageGradesCalculator(
    student.firstGrade,
    student.secondGrade
  );

  if (averageGrades >= 7 && averageGrades <= 10) {
    alert(`A média do aluno ${student.name} foi de ${averageGrades}.
    Parabéns, vc passou no concurso!`);
  } else if (averageGrades >= 0 && averageGrades < 7) {
    alert(`A média do aluno ${student.name} foi de ${averageGrades}.
    Infelizmente não foi suficiente para passar no concurso.`);
  }
}
