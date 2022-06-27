const person = {
  name: "Luiz",
  age: 25,
  musicGenre: "Rock",
};
const object = {
  name: "Star Wars: A Guerra dos Clones",
  type: "filme",
};

function showOnConsole(args) {
  console.log(args);
}

function getName(name) {
  console.log(`Meu nome é: ${name}`);
}

function getPerson(person) {
  console.log(`Nome: ${person.name}`);
  console.log(`Idade: ${person.age}`);
  console.log(`Estilo Musical: ${person.musicGenre}`);
}

function getMovieOrMusic(object) {
  console.log(object.name);
}

function triplicateNumber(number) {
  return `o triplo de ${number} é ${number * 3}`;
}

showOnConsole("Mostrando no console.");
getName("Rian");
getPerson(person);
getMovieOrMusic(object);
console.log(triplicateNumber(5));
