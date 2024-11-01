numerot = [];

for(let i = 0; i < 3; i++){
  const numeroStr = prompt("Anna numero: ");
  const numero = parseInt(numeroStr);
  numerot.push(numero)
};

sum = 0;

numerot.forEach( num => {
  sum += num;
});

console.log(sum)
