let nombre = 'Juan';
let apellido  = 'Perez';
let sueldoActual = 272000.00;
let porcentajeAumento = 30;

let calculoAumento = ((sueldoActual * porcentajeAumento)/100);
let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`Hola , estimad@ ${nombre} ${apellido}
En Base a su sueldo actual:
$${sueldoActual}
Ha recibido un aumente del ${porcentajeAumento}%:
$${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}`)