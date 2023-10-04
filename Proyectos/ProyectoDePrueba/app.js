/*
1. En la carpeta ya creada, crea un nuevo archivo (mensaje.txt).
2. En el archivo creado, escribe el mensaje que quieras. Por ejemplo: “Node.js® es un
entorno de ejecución para JavaScript construido con V8, motor de JavaScript
de Chrome.”
3. Dentro del archivo (app.js), crea una variable a la que se le asigne la ruta del archivo
(mensaje.txt) y luego llama al módulo nativo de Node.js que te permita leer el
contenido del archivo (mensaje.txt).
4. Una vez leído, muestra al usuario por la consola el contenido del mismo.
*/

/*Llamo modulo fs*/
let fs = require('fs')

/*C:\Users\UzumakySan\Desktop\DigitalHouse\Proyectos\ProyectoDePrueba*/
let  dato = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8')
dato += '\n\nMi nueva fila'

//fs.writeFileSync(__dirname + '/mensaje.txt', dato)
//fs.appendFileSync(__dirname + '/mensaje.txt',)

//dato = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8')

console.log(fs)