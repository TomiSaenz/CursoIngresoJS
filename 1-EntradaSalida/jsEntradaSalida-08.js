/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	dividendo = document.getElementById('txtIdNumeroDividendo').value;
	let divisor;
	divisor = document.getElementById('txtIdNumeroDivisor').value;
	let resto;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resto = dividendo%divisor;

	alert("El resto es "+ resto);
}
