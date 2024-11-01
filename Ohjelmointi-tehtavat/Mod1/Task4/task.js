let nimi = prompt("Anna nimesi: ");

let numero = Math.floor(Math.random() * 4) + 1;

if (numero === 1) {
  console.log(nimi + " You are a Gryffindor");
} else if (numero === 2) {
  console.log(nimi + " You are a Slytherin");
} else if (numero === 3) {
  console.log(nimi + " You are a Hufflepuff");
} else if (numero === 4) {
  console.log(nimi + " You are a Ravenclaw");
}
