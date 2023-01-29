document.getElementById("boton-a").onclick = function (){
    document.getElementById("info").innerHTML = "Nombre: FirstName<br>Apellido: LastName<br>Nacionalidad: Country<br>Fecha de Nacimiento: Date<br>";
}

document.getElementById("boton-b").onclick = function (){
    document.getElementById("info").innerHTML = "Actualmente me encuentro en proceso de formacion<br> Estoy aprendiendo a programar";
}

document.getElementById("boton-c").onclick = function (){
    document.getElementById("info").innerHTML = "Correo: mi.correo@gmail.com<br>"+FormularioDeContacto();
}

function FormularioDeContacto(){
    return ("<strong>FORMULARIO DE CONTACTO</strong><br><div><label><strong>Nombre <br></strong></label><input><br><div><label><strong>Apellido <br></strong></label><input><br><div><label><strong>Mensaje <br></strong></label><textarea></textarea>");
}