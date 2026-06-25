document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.getElementById("formulario-contacto");
    const mensajeEstado = document.getElementById("mensaje-estado");

    const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwKOReBX64Mf8q4_V_bpaR_B4-MMEqMJyGhN3b2rfFbHjRDAQj6pS9WUMKPNDtBwiun/exec";

    formulario.addEventListener("submit", function(evento){

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;

        const datos = new FormData();

        datos.append("nombre", nombre);
        datos.append("correo", correo);
        datos.append("mensaje", mensaje);

        fetch(URL_SCRIPT, {
            method: "POST",
            body: datos
        })
        .then(response => response.text())
        .then(data => {

            mensajeEstado.textContent =
                "Gracias " + nombre + ", tu mensaje fue enviado correctamente.";

            formulario.reset();

        })
        .catch(error => {

            mensajeEstado.textContent =
                "Error al enviar el formulario.";

            console.error(error);

        });

    });

});