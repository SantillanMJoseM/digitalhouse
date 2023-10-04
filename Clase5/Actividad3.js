/*Funcion que devuelve todo el strig en mayusculas*/
function aMayuscula(parm){
    return parm.toUpperCase();
};

//console.log(aMayuscula('hola buenas tardes'))

/*Funcion que devuelve tipo de dato*/
function tDato (parm){
    return typeof parm;
};

//console.log(tDato(4));

/*Funcion que devuelve edad de perros*/
function ePerros (parm){
    return parm*7;
};

//console.log(ePerros(1));

/*Funcion que calcula el valor de una hora de trabajo*/
function vHoraTrabajo(salario, dias, horas){
    return ((salario/dias)/horas)
}

//console.log(vHoraTrabajo(150000, 20, 6))