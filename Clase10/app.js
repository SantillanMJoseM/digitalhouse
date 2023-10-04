let datoBici = require("./datosBici")

//console.log(datoBici.readJson())

dhBici = {
    bicicletas: datoBici.readJson(),
    bucarBiciPorId: function(parm){
        let encontrado = this.bicicletas.filter(bici=> bici.id == parm)
        if (encontrado.length == 0){
            encontrado = null
        }

        return encontrado
    }
}

console.log(dhBici.bucarBiciPorId("12"))