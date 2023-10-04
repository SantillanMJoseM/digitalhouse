let operacionesBancarias = [5000,5000,-7000,-1500,20000,13000,-4000,-500,150,-350]

/*Declaro Callback*/
function calcularSaldo(operaciones) {
    let depositos = 0;
    let retiros = 0;
    let cantidad = operaciones.length

    /*Genero la sentia del for recorrer el arreglo*/
    for (let i = 0; i < cantidad; i++) {
        /*Divido depositos de retiros*/
        if (operaciones[i] > 0) {
            depositos += operaciones[i];
        } else {
            retiros += operaciones[i];
        }
    }
  
    const saldoActual = depositos + retiros;
    /*Retorno los valores calculados*/
    return {depositos, retiros, saldoActual};
}

/*Genero funcion principal que llama el callback*/
function obtenerInfoCliente(nombre, apellido, callback) {//Ver 

    /*Obtengo el resultado del callback*/
    const saldoInfo = callback(operacionesBancarias);
    return `Estimad@ ${nombre} ${apellido}: El monto total de los depósitos es de: $${saldoInfo.depositos}. El monto total de los retiros es de: $${saldoInfo.retiros*-1}.  Por lo tanto, su saldo actual en la cuenta es de: $${saldoInfo.saldoActual}.`
  }  

console.log(obtenerInfoCliente('Juan', 'Perez', calcularSaldo))