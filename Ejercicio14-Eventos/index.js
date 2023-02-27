const b = document.getElementById("boton");

b.addEventListener("click", evento => {

    console.log(alert("click en el botón"));
    evento.preventDefault();
});

    
$(b).click(function() {
    console.log("Hola, estoy utilizando jQuery");
});