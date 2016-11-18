/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var miNombre;
	var miEdad;
	miNombre = document.getElementById('elNombre').value;
	miEdad = document.getElementById('laEdad').value;
	alert("Usted se llama"+miNombre+" y tiene "+miEdad+" años");


/* es para mostrar mensajes en la consola de la fista de desarollador
var unaVariable = "datos";
console.log("primer mensaje")
console.info("linea final:",unaVariable);
}

