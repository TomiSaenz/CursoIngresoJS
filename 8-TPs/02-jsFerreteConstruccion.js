/*2.	Para el departamento de Construcción:
Tomas Saenz
TP e/s 02
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let ancho;
	let largo;
	let perimetro;
	let vueltas;

	ancho = document.getElementById('txtIdAncho').value;
	largo = document.getElementById('txtIdLargo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = 2*ancho + 2*largo;

	vueltas = 3*perimetro;

	alert("Se necesitan "+ vueltas + " unidades de alambre");
}
function Circulo () 
{
	let radio;
	let alambre;

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio);

	alambre = (2* radio * Math.PI)*3;

	alert("El alambre necesario es de "+ alambre.toFixed(2));
}
function Materiales () 
{
	let anchodelterreno;
	let largodelterreno;
	let areadelterreno;
	let cantidaddecemento;
	let cantidadcal;
	let mensaje;

	anchodelterreno = document.getElementById('txtIdAncho').value;
	largodelterreno = document.getElementById('txtIdLargo').value;

	anchodelterreno = parseInt(anchodelterreno);
	largodelterreno = parseInt(largodelterreno);

	areadelterreno = (anchodelterreno * largodelterreno);

	cantidaddecemento = (areadelterreno * 2);

	cantidadcal = (areadelterreno * 3);

	mensaje = "Para un terreno de "+areadelterreno+" metros cuadrados, se necesitan "
	+cantidadcal+" bolsas de cal y "+cantidaddecemento+" bolsas de cemento";

	alert (mensaje);
}