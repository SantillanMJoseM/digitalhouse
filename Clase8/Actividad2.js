let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJavaScript = "70 65 58 45 23 57 34 17 72";
let graduadosNodeJS = "45 56 73 34 65 72 70 32";


let arrayHTML5 = graduadosHTML5.split(" ").map(Number);
let arrayCSS3 = graduadosCSS3.split(" ").map(Number);
let arrayJavaScript = graduadosJavaScript.split(" ").map(Number);
let arrayNodeJS = graduadosNodeJS.split(" ").map(Number);

/*
let arrayHTML5 = graduadosHTML5.split(" ");
let arrayCSS3 = graduadosCSS3.split(" ");
let arrayJavaScript = graduadosJavaScript.split(" ");
let arrayNodeJS = graduadosNodeJS.split(" ");
*/

let array = [[arrayHTML5],[arrayCSS3],[arrayJavaScript],[arrayNodeJS]]

/*Selecciono array segun curso elegido*/
function calcularPromedio(graduados, curso) {
    let promedio = 0;
    let cursoNombre = "";
    let j = (curso - 1)
    //console.log(j)
    switch (curso) {
      case 1:
        promedio = calcularPromedioArray(graduados,j);
        cursoNombre = "HTML5";
        break;
      case 2:
        promedio = calcularPromedioArray(graduados,j);
        cursoNombre = "CSS3";
        break;
      case 3:
        promedio = calcularPromedioArray(graduados,j);
        cursoNombre = "JavaScript";
        break;
      case 4:
        promedio = calcularPromedioArray(graduados,j);
        cursoNombre = "Node.js";
        break;
      default:
        return "Los cursos disponibles son: 1 = HTML5, 2 = CSS3, 3 = JavaScript, 4 = Node.js";
    }
  
    return `El promedio de graduados en ${cursoNombre} es: ${promedio}`;
  }

/*Calculo promedio para curso elegido*/ 
function calcularPromedioArray(array, j) {
    let sum = 0;
    for(i=0; i < array[j].length; i++){
        for(k=0; k < array[j][i].length; k++){
            sum +=array[j][i][k];
        }; 
        return sum / array[j][i].length;
   };
 }

 const cursoSeleccionado = 2; 
 console.log(calcularPromedio(array, cursoSeleccionado));