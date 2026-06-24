document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.getElementById("formulario-contacto");
    const mensajeEstado = document.getElementById("mensaje-estado");


    formulario.addEventListener("submit", function(evento){

        evento.preventDefault();


        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;


        mensajeEstado.textContent = 
        "Gracias " + nombre + ", tu mensaje fue enviado correctamente.";


        formulario.reset();

    });

});