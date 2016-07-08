var fs = require('fs') //uso file system para acceder a los archivos del disco  
var path = require('path') //path es usado para acceder a las rutas de los directorios

module.exports = function (dir, ext, callback){ //funcion que vamos a exportar
	fs.readdir(dir, function doneReading(err, list) { //.readdir para leer un directorio
		if(err) return callback(err)//si existe un error lo envia al callback

    	list = list.filter(function(file) {
    		return path.extname(file) === '.' + ext 
    		//Esto retorna un array con los elementos filtrados
    	})
	
		callback(null, list) //si todo fue bien se le envia al callback la lista(Array)
	})
}