/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1
	numero1 = document.getElementById('txtIdNumeroUno').value;
	let numero2
	numero2 = document.getElementById('txtIdNumeroDos').value;
	let resultadoSuma
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultadoSuma = numero1+numero2;

	alert("la Suma es "+ resultadoSuma);			
}

function restar()
{
	let numero1
	numero1 = document.getElementById('txtIdNumeroUno').value;
	let numero2
	numero2 = document.getElementById('txtIdNumeroDos').value;
	let resultadoResta
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultadoResta = numero1-numero2;

	alert("la Resta es "+ resultadoResta);	
}

function multiplicar()
{ 
	let numero1
	numero1 = document.getElementById('txtIdNumeroUno').value;
	let numero2
	numero2 = document.getElementById('txtIdNumeroDos').value;
	let resultadoMultiplicacion
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultadoMultiplicacion = numero1*numero2;

	alert("el resultado de la Multiplicacion es "+ resultadoMultiplicacion);	
}

function dividir()
{
	let numero1
	numero1 = document.getElementById('txtIdNumeroUno').value;
	let numero2
	numero2 = document.getElementById('txtIdNumeroDos').value;
	let resultadoDivision
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultadoDivision = numero1/numero2;
	alert("el resultado de la Division es "+ resultadoDivision);
	
}

