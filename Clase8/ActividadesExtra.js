/*Primera actividad extra*/
function invertiTexto(string){
    let array = string.split('');
    array = array.reverse();
    return array.join('')
}

let frase = 'Hola mi nombre es Juan Perez'

//console.log(invertiTexto(frase));

/*Segunda actividad extra*/
function primeraPalabra(string){
    let array = string.split(' ');
    let palabra = array[0];
    return palabra
}

let frasee = 'feliz dia del programador'
//console.log(primeraPalabra(frasee));

/*Tercera actividad extra*/
function primeraPalabra(string){
    let array = string.split(' ');
    let palabra = array[array.length-1];
    return palabra
}

let fraseee = 'feliz dia del programador'
//console.log(primeraPalabra(fraseee));

/*Cuarta actividad extra*/
function listaDePalbras (string){
    let array = string.split(' ');
    let cant = (array.length-1)
    return {array,cant}
}

let oracion = 'esta es una frase muy interesante'
//const result = listaDePalbras(oracion) 
//console.log(`El resultado es [${result.array}] la cantidad de palabras son ${result.cant}`)

/*Quinta actividad extra*/
function PalabraMasLarga(oracionn){
    let array = oracionn.split(' ');
    let contlet = 0
    let selpalabra = 0
    let palabra = ''
    for (i=0; i < array.length; i++){
        if (array[i].length > contlet){
            contlet = array[i].length
            selpalabra = i
            palabra = array[i]
        };
    };
    return {contlet, selpalabra, palabra}
}
let oracionn = 'esta es una frase muy interesante'
//const result = PalabraMasLarga(oracionn)
//console.log(`La palabra mas larga tiene ${result.contlet} letras, es la numero ${result.selpalabra+1} y la palabra es "${result.palabra}"`)