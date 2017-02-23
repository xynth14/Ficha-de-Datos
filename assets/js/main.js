var enviar = document.getElementById("enviar");
var mostrar = document.getElementById("mostrar");

enviar.onclick = function (){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var direccion = document.getElementById("direccion").value;

	if(nombre != '' && apellido != '' && dni != '' && direccion != ''){

	mostrar.innerHTML = '<ul>' + 
							'<li>Nombre: ' + nombre + '</li>' + 
							'<li>Apellido: ' + apellido + '</li>' + 
							'<li>DNI: ' + dni + '</li>' + 
							'<li>Dirección: ' + direccion + '</li>' + 
						'</ul>';

	
	}
}