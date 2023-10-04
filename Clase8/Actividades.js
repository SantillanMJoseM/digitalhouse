/*Actividad 1 de clase 8*/
function sumatoriaBajoImporte(array){
    let suma = 0
    for (i=0; i < array.length; i++){
        if (array[i]<=1000 && array[i]>0){
            suma += array[i];
        };
    };
    return suma;
}

let arregloGanancias =  [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000] 
//console.log(sumatoriaBajoImporte(arregloGanancias))

/*Actividad 2 de clase 8*/
function asientosDisponibles(array,asiento){
    let ban = 0;
    let tot = array.length;
    let i = 0;
    while (ban == 0 &&  i < tot){
        if(asiento==array[i]){
            ban = 1;
        };
        i++;
    };

    let resultado = (ban>0) ? `Felicitaciones, el asiento número ${asiento} está disponible`:
    `Lo sentimos, el asiento número ${asiento} está ocupado, pero aún quedan ${tot} asientos disponibles`;
    return resultado
}

let asientos = [15, 28, 44, 45, 70]
//console.log(asientosDisponibles(asientos,28));

/*Actividad 3 de la clase 8*/
function reporteDePasajeros(estaciones){
    let pasajeros = 200;
    let cont = 0;
    let mensaje =[];
    while (cont<=estaciones){
        if (cont>0){
            if(cont != 5){
                pasajeros += 20;
            }else{
                pasajeros += 40;
            };
        };
        mensaje.push('En la estación '+cont+' hay '+pasajeros+' pasajeros arriba del tren')
        cont++
    }
    return mensaje
}

//console.log(reporteDePasajeros(5))

/*Actividad 4 de la clase 8*/

function laClaveSecreta(array){
    while (array.includes('*')){
        array.splice(array.indexOf('*'),1)        
    };

    array = array.reverse()
    return array.join('')
}

let codificado = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]

console.log(laClaveSecreta(codificado));