function activarBoton(){
    alert("Hiciste click en el botón");
}

function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("documento").value;
    let fechaNacimiento = document.getElementById("fechaNacimeinto").value;

    alert("Hola, " + nombre + " " + apellido + 
          "\nDNI: " + dni + 
          "\nFecha de Nacimiento: " + fechaNacimiento);
}



