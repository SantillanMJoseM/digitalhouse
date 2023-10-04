let palabra = 'gato'

palabra = palabra.toUpperCase();

switch (palabra){
    case  'PERRO':
        console.log('DOG');
        break;
    case 'GATO':
        console.log('CAT');
        break;
    case 'PUERTA':
        console.log('DOOR');
        break;
    case 'VENTANA':
        console.log('WINDOW');
        break;
    default:
        console.log('La palabra ingresada es incorrecta.'); 
        break;
}