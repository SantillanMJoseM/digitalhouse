function calcularCosto (nombre, parm){
    /*Estandarizado del tipo de vehiculo ingresado*/
    tiph = parm[0].toLowerCase();

    /*cargo monto base segun tipo de vehiculo*/
    switch (tiph){
        case 'carne a la parrilla':
            costo = 1800;
            break;
        case 'pollo':
            costo = 1500;
            break;
        case 'vegetariana':
            costo = 1200;
            break;
        /*    
        default:
            return 'No se envio ningun tipo de vehiculo definido no se puede calcular el costo del alquiler.';//Consultar si corresponde la eleccion
        */
 }

 let parm = ['carne',true,true,true,true,true,true,true,true,true];
 let nombre = 'Juan Perez'

 //console.log(calcularCosto(nombre, parm))