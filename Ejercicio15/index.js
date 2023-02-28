const nombre = "Maxi";
const apellido = "Marcos";

const persona = {
    nombre,
    apellido
}

// sessionStorage.setItem("persona", JSON.stringify(persona));

// localStorage.setItem("persona", JSON.stringify(persona));


const now = new Date();

// document.cookie = `datos=${JSON.stringify(persona)};expires=${new Date(now.getTime() + 2 * 60000)}`