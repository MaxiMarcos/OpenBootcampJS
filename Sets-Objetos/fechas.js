const hoy = new Date();

const nacimiento = new Date('Jan 4 1997');

const compara = hoy.getTime() > nacimiento.getTime();

const diaNacimiento = nacimiento.getDate();

const mesNacimiento = nacimiento.getMonth();

const añoNacimiento = nacimiento.getFullYear();

console.log(añoNacimiento);