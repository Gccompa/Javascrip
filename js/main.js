// Comentario de 1 linea 

/* Comentario de varias lineas */

// Declarando variables 


//Pre-entrega Nro 1 

// Declaración de Funciones


function nombreUsuario() {

    const nombre = prompt("ingrese su nombre de usuario");

    return nombre;
}

function contraseñaUsuario() {

    let contraseña = parseInt(prompt("ingrese su contraseña numérica"));

    console.log("Su contraseña es correcta");

}


function seleccionarProducto() {

    const prodcuto = prompt("Elija el producto: 1-Vianda Vegetariana 2-Vianda Carnivora 3-Vianda Vegana 4-Vianda Variada 0-Salir");

    while (seleccionarProducto !== 0);
 

}


// Función con parámetros



function packViandaPrecioCantidad(precioVianda, combo) {

    let resultadoPrecioCantidad = precioVianda * combo;

    return resultadoPrecioCantidad;
}


function oferta(combo, pagotransferencia) {

    if (combo === 30 && pagotransferencia); {

        console.log("Tienes un 20% de descuento en tu compra y el envío gratis");
    }

}


// Declaración de Variables 

let precioVianda = 0;
let combo = 0;
let porcentaje = 0.20;
const pagotransferencia = "transferencia"

const vianda1 = "Vegetariana";
let precioVianda1 = 890;

const Vianda2 = "Carnivora";
let precioVianda2 = 980;

const vianda3 = "Vegana";
let precioVianda3 = 1050;

const vianda4 = "Variada";
let precioVianda4 = 1100;

const combo1Cant = 7;
const combo2Cant = 14;
const combo3Cant = 30;



// Inicio del Programa 


const nombre = nombreUsuario();
console.log("el nombre de usuario ingresado es: " + nombre);

contraseñaUsuario();

seleccionarProducto();

const resultadoPrecioCantidad = packViandaPrecioCantidad(890, 30);
console.log("El costo de su pack es: " + resultadoPrecioCantidad);

oferta();

alert("El monto final es de $21.360");












