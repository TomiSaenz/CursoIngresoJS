/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
	let resultado;
	let porcentaje;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);

	porcentaje = prompt("Ingrese el porcentaje");

	resultado = sueldo / porcentaje + sueldo;

	document.getElementById('txtIdResultado').value = resultado;

	alert("el Sueldo con su respectivo aumento es "+ resultado);
}
