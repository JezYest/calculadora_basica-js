// console.log(document.title);
// document.title = 'Prueba de titulo';
// console.log(document.title);
// console.log(document.body);
// var h1 = document.getElementsByTagName('h1');

// h1[0].innerHTML = 'Prueba';
// console.log(h1);

// var boton = document.getElementById('boton');
// console.log(boton);

// //Agregar evento al boton
// boton.addEventListener('click', mensaje);

// function mensaje(){
//     alert('Un mensaje :v')
// ;}
const botonNumeros = document.getElementsByName("data-number")
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");

//Definimos variables
var OperacionActual = '';
var OperacionAnterior = '';
var Operacion = undefined;

//foreach para recorrer arreglos
botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectoperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});

function selectoperacion(op) {
    if (OperacionActual == '') return;
    if (OperacionAnterior !== '') {
        calcular();
    }
    Operacion = op.toString();
    OperacionAnterior = OperacionActual;
    OperacionActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(OperacionAnterior);
    const actual = parseFloat(OperacionActual);

    if (isNaN(anterior) || isNaN(actual)) return;
    switch (Operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    OperacionActual = calculo;
    Operacion = undefined;
    OperacionAnterior = '';


}


function agregarNumero(num) {
    OperacionActual = OperacionActual.toString() + num.toString();
    actualizarDisplay();
}
function clear() {
    OperacionActual = '';
    OperacionAnterior = '';
    Operacion = undefined;
}

function actualizarDisplay() {
    result.value = OperacionActual;
}

clear();