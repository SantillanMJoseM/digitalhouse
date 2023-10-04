let operacionesBancarias = [5000,5000,-7000,-1500,20000,13000,-4000,-500,150,-350]

function obtenerSaldoTotal(arregloOperaciones){
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;
    for (let i = 0; i < arregloOperaciones.length ; i++){
        if (arregloOperaciones[i]>0){
            depositos += arregloOperaciones[i];
        }else{
            retiros += arregloOperaciones[i];
        };
    };

    saldoActual = depositos + retiros

    let resultado = [saldoActual, depositos, retiros]

    //return {saldoActual, depositos, retiros}
    return resultado
}


console.log(obtenerSaldoTotal(operacionesBancarias));