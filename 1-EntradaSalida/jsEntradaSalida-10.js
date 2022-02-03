/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let descuento;
	let total;

	sueldo = document.getElementById('txtIdImporte').value;
	sueldo = parseInt(sueldo);

	descuento = prompt("Ingrese el porcentaje");

	total = sueldo - sueldo * descuento / 100;

	document.getElementById('txtIdResultado').value = total;

	alert("El valor con " + descuento + " % de descuento es " + total);	
}
