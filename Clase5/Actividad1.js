function alquilerDeVehiculo(tipv, dalq, silla){
    /*Estandarizado del tipo de vehiculo ingresado*/
    tipv = tipv.toLowerCase();

    /*Declaro e inicializo variables*/
    let costo = 0 ;

    /*cargo monto base segun tipo de vehiculo*/
    switch (tipv){
        case 'compacto':
            costo = 14000*dalq;
            break;
        case 'mediano':
            costo = 17000*dalq;
            break;
        case 'camioneta':
            costo = 14000*dalq;
            break;
        /*    
        default:
            return 'No se envio ningun tipo de vehiculo definido no se puede calcular el costo del alquiler.';//Consultar si corresponde la eleccion
        */
    }

    /*Usa silla de bebe*/   
    let msilla = (silla.toLowerCase() == 'si') ? 1200 * dalq : 0;
    //console.log(msilla)

    /*Armo el mensaje para retornar*/
    let mensaje = (msilla == 0) ? `Estimado cliente: en base al tipo de vehículo ${tipv} alquilado, considerando los ${dalq} días
    utilizados, el monto total a pagar es de $${costo}.`:`Estimado cliente: en base al tipo de vehículo ${tipv} alquilado, considerando los ${dalq} días
    utilizados, el monto total a pagar es de $${costo+msilla} el cual incuye el costo de las silla de bebe solicitada.` ;

    return mensaje
};

/*Test de funcion*/
console.log(alquilerDeVehiculo('Mediano',7,'no'));