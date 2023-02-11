function seráTrue() { return true }



const datos = "Hola soy una promesa";
const miPromesa = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve();
            reject();
        }, 5000);
    });
};

miPromesa()
    .then(() => console.log(datos))
    .catch(() => console.log("ERROR"));

// O TAMBIEN:

async function miPromesa2() {
    return setTimeout(() => console.log("Hola soy otra promesa"), 5000)
}


function* generarID() {

    let id = 0;
    while(id <= 7) {
        yield id += 2;
    }
}

const genid = generarID();
console.log(genid.next());
console.log(genid.next());
console.log(genid.next());
console.log(genid.next());
console.log(genid.next());