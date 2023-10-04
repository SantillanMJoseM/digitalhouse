/*Declaracion de arrays*/
let precios = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];
let cursosElegidos = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"];
let nombre = 'Juan'
let apellido = 'Perez'

function callbackFacturacion(precios, cursosElegidos) {
    let importe = 0;
    let cursos = '';

    /*Para cada elemento de cursosElegidos busco precio*/
    for(let i = 0; i < cursosElegidos.length; i++) {
        let j = cursosElegidos[i].toLowerCase();

        /*Concateno con formato los elementos de cursosElegidos*/
        cursos += i+1+'.- '+cursosElegidos[i]+'\n\n'
        let p = 0;
        let ban = 0;

        /*Busco precio hasta ser encontrado y salgo o recorro completo*/
        while(p < precios.length && ban == 0){
            if (precios[p].includes(j)){
                importe += precios[p][1];
                ban = 1;
            };
            p++;
        };
    };
    return{importe, cursos}
}

function calcularMonto(nombre, apellido, cursos, cursosATomar, callback){
    /*Obtengo total a pagar*/
    let datos = callback(cursos, cursosATomar);
    let mensaje =`Estimado ${nombre} ${apellido}, en funcion de los cursos elegidos:\n\n`;
    mensaje += `${datos.cursos}`;
    mensaje += `El monto a pagar es de: $${datos.importe}. Bienvenido a la gran aventura Digital House`;

    /*Armo salida*/
    return (mensaje)
}

console.log(calcularMonto(nombre, apellido, precios, cursosElegidos, callbackFacturacion))