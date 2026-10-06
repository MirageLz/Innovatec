let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");

function registrar(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edad = Number(document.getElementById("edad").value);
    let carrera = document.getElementById("carrera").value;

    if (nombre.length < 3 || edad < 16 || edad > 100) {
        mensaje.textContent = "Revisa tu nombre y tu edad antes de continuar.";
        mensaje.className = "error";
    } else {
        mensaje.textContent = "Gracias, " + nombre + ". Tu solicitud para " + carrera + " se registró en esta demostración.";
        mensaje.className = "correcto";
        formulario.reset();
    }
}

formulario.addEventListener("submit", registrar);