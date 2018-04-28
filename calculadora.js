var primerNumero = ''
var segundoNumero = ''
var ultimoOperador = ''
var subtotal = 0
var display = document.getElementById('resultado')

function numero(numero) {
	if (ultimoOperador== '') {
		primerNumero = primerNumero + numero
		console.log(primerNumero)
		display.value = primerNumero
	}
		else {
		segundoNumero = segundoNumero + numero
		console.log(segundoNumero)
		display.value = segundoNumero
	}
}

function suma () {
	if (ultimoOperador== '') {
		ultimoOperador = 'sum'
	} else {
		calculo()
	}
}

function resta () {
	if (ultimoOperador== '') {
		ultimoOperador = 'res'
	} else {
		calculo()
	}
}

function multiplicacion () {
	if (ultimoOperador== '') {
		ultimoOperador = 'mul'
	} else {
		calculo()
	}
}

function division () {
	if (ultimoOperador== '') {
		ultimoOperador = 'div'
	} else {
		calculo()
	}
}

function resultado(){
	var resultado = document.getElementById('resultado')
	calculo()
	resultado.value = primerNumero
}

function calculo () {
	switch (ultimoOperador){
		case 'sum':
			primerNumero = parseInt(primerNumero) + parseInt(segundoNumero)
			ultimoOperador = ''
			segundoNumero = ''
			break
	}
	switch (ultimoOperador){
		case 'res':
			primerNumero = parseInt(primerNumero) - parseInt(segundoNumero)
			ultimoOperador = ''
			segundoNumero = ''
			break
	}
	switch (ultimoOperador){
		case 'mul':
			primerNumero = parseInt(primerNumero) * parseInt(segundoNumero)
			ultimoOperador = ''
			segundoNumero = ''
			break
	}
	switch (ultimoOperador){
		case 'div':
			primerNumero = parseInt(primerNumero) / parseInt(segundoNumero)
			ultimoOperador = ''
			segundoNumero = ''
			break
	}
}

function limpiar(){
  document.getElementById('resultado').value = ''
}