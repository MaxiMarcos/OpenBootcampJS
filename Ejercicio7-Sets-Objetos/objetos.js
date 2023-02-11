const misDatos = {
    nombre: "Maximiliano",
    apellido: "Marcos",
    edad: 26,
    altura: 1.80,
    eresDesarrollador: true
}
const edad = misDatos.edad;

const lista = [  
    {...misDatos},
    
    {
        nombre: "Nacho",
        edad: 24,
        altura: 1.80,
        eresDesarrollador: false
    },
    {
        nombre: "Vale",
        edad: 25,
        altura: 1.69,
        eresDesarrollador: false
    }
]
const listaOrdenada = lista.sort((b, a) => a.edad - b.edad);

console.log(listaOrdenada);