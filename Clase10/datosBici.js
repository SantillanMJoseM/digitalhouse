let fs = require("fs")
let manejadoDeJson = {
    readJson: function(){ //Funcion anonima
        let biciletas = fs.readFileSync (__dirname + "/bicicletas.json","utf-8")
        return JSON.parse(biciletas)
    }
}

//console.log(manejadoDeJson.readJson())

module.exports = manejadoDeJson