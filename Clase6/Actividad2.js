let estruc = ['Turno de día','30 noches con mi ex','Bestia','El monte','Top gun maverick','Elvis','Thor: amor y trueno']

/*Declaro  funcion para pasar a mayuscula*/
function peliMayuscula (parm){
    let indice = (estruc.indexOf(parm))
    if (indice > 0) {
        estruc[indice] = estruc[indice].toUpperCase();
        return(estruc[indice]);
    }
}

/*Mostramos dato de la funcion*/
console.log('Pelicula ahora en mayusculas: '+peliMayuscula('Thor: amor y trueno'))

/*Parte 2*/ 
let string = 'Counter-Strike,NOP,Vértigo,Nick,Avatar'

/*Cambio el strin a array*/
string = (string.split(','));

/*Elimino primer elemento*/
string.shift();
//console.log(string)

function ambasCreadas(parm, parm1){
    const nuevo = parm.concat(parm1);
    //console.log(nuevo)
    return (nuevo);
}

console.log('Estructura con peliculas: '+ambasCreadas(estruc,string));