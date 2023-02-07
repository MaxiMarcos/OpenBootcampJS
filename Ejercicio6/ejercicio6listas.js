const lista = ["pan", "leche", "queso", "huevos", "fideos"];
lista.unshift("Aceite de Girasol");
console.log(lista);

lista.shift();
console.log(lista);


const peliculas = [
    {name: "Scarface", director: "Brian De Palma" , fecha: 1983},
    {name: "El efecto mariposa", director: "Eric Bress" , fecha: 2004},
    {name: "Los juegos del hambre", director: "Gary Ross" , fecha: 2012}
]
const peliculas_filtradas = peliculas.filter(el => el.fecha > 2010)
console.log(peliculas_filtradas);

const peliculas_directores = peliculas.map(el => el.director);
console.log(peliculas_directores);

const peliculas_títulos = peliculas.map(el => el.name);
console.log(peliculas_títulos);

const titulos_and_directores = peliculas_directores.concat(peliculas_títulos);
console.log(titulos_and_directores);

const factorPropagación = [...peliculas_directores, ...peliculas_títulos];
console.log(factorPropagación);