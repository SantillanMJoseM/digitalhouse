let electrodomesticos = ['Heladera','Hielera','Exprimidor','Batidora','Microondas','Extractor','Tostador'];
/*Muestreo de algunos datos*/
console.log(electrodomesticos[0]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[4]);
console.log(electrodomesticos[6]);

/*Guardo agrego y elimino datos*/ 
let primero = electrodomesticos.shift();
electrodomesticos.push(primero);


/*Agrego dos elementos*/
electrodomesticos.push('Lavarrolas','Secarropas');

/*Muestro cantidad de elementos en el array*/
console.log('Cantidad de elementos en el array: '+electrodomesticos.length);

/*Compruebo existencia de elemento y emito mensaje*/
if (electrodomesticos.includes('Exprimidor')){
    console.log('Producto encontrado');
}else{
    console.log('El producto buscado no existe');
}

/*Unificar todos los elementos*/
let cadena = electrodomesticos.join(' ')

/*Cantidad de palabras en el string*/
console.log('Cantidad de elementos en el string: '+cadena.split(' ').length);
console.log('Cantidad de caracteres en el string: '+cadena.length);

/*Cambio un elemento y convierto el resultado en nuevo array*/
let narray = (cadena.replace('Hielera', 'Cafetera').split(','));

/*Muestro nuevo array*/
console.log(narray)