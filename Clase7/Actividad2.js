function multiplicar(){
    for (let i=1; i <= 10; i++){
        console.log(`*******Tabla del ${i}*******`)
        for (let j=1; j <=10; j++){
            console.log(i +' * '+ j + ' = ' + j*i);
        } 
    }
     
}

/*Disparo function sin obteber return*/
multiplicar()