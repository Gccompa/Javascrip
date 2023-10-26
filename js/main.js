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


// Función con parámetros


function oferta(cantidad) {

    if (cantidad === 30) 
       
    console.log("Tienes un 20% de descuento en tu compra y el envío gratis");
}


// Declaración de Variables


let porcentaje = 0.20;
let totalConDescuento = 0;
let precioTotal = 0;


// Inicio del Programa


const nombre = nombreUsuario();
console.log("el nombre de usuario ingresado es: " + nombre);

contraseñaUsuario();



let producto = (prompt("Escriba el nombre de la vianda que desea agregar al carrito, de lo contrario escriba SALIR. Las viandas son: vegetariana - carnivora - vegano - variado"));
let precioVianda;

if (producto === "vegetariana") {
    precioVianda = 890
} else if (producto === "carnìvora") {
    preciovianda = 980
} else if (producto === "vegano") {
    precioVianda = 1050
} else if (producto === "variado") {
    precioVianda = 1100
} else {
    alert("No ha ingresado ningún producto al carrito");
}

console.log("La vianda seleccionada es: " + producto + " su precio por unidad es: " + precioVianda);


let cantidad = parseInt(prompt("Ingrese la cantidad de viandas, combo de: 7, 14 o 30"));

if (cantidad === 7 || cantidad === 14 || cantidad === 30) {
   precioTotal = precioVianda * cantidad;
   console.log("Ustded debe abonar: " + precioTotal)

} if (oferta(cantidad)) {
   
}

totalConDescuento = precioTotal - (precioTotal * porcentaje);
alert("Con el descuento aplicado debe abonar: " + totalConDescuento);


console.log("fin del programa");