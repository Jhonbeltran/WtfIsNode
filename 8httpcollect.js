var http = require('http')  
//Este modulo bufferlist A Node.js Buffer list collector, reader and streamer thingy.
var bl = require('bl') //usado para almacenar el stream completo de datos

//El método http.get() es versión simplificada para peticiones GET
/*A diferencia de otros callbacks la firma es:  
     function callback (response) { /* ... * / } */
http.get(process.argv[2], function (response) {
  //.pipe=Los datos del response van a llegar por un solo camino(tuberia) al 'data'
  /*puede usar un stream piped para capturar los datos.
   Una  vez que se acaba el stream se dispara un callback con todos los datos:  */
    response.pipe(bl(function (err, data) {
    if (err) return console.error(err) //si hay un error
    data = data.toString()//.toString() para convertir al Buffer de Node a String.  
    console.log(data.length)//cantidad de caracteres recibidos.
    console.log(data)//caracteres recibidos  
  }))    
})


/* ## HTTP COLLECT (Ejercicio 8 de 13)  
   
  Escribe un programa que realice una petición HTTP GET a una URL provista  
  como primer argumento del programa. Almacena todos los datos recibidos del  
  servidor, es decir no sólo el primer evento "data", y luego escribe a  
  consola dos líneas:  
   
   » En la primera escribe la cantidad de caracteres recibidos.                  
   » En la segunda escribe la totalidad de caracteres recibidos (todo el                                                                            
     string).                                                                    
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## PISTAS  
   
  Hay por lo menos dos formas de resolver este problema:  
   
  1) Almacenar los datos de todos los eventos "data" para luego agregarlos  
  los resultados antes de imprimirlos por consola. Puedes usar el evento  
  "end" para saber cuando terminas de recibir datos.  
   
  2) Usa un paquete de terceros para evitar los problemas de almacenar el  
  stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer  
  List) o concat-stream.  
   
  <http://npm.im/bl> <http://npm.im/concat-stream>  
   
  Para instalar alguno de estos paquetes usa Node Package Manager npm de la  
  siguiente forma:  
   
     $ npm install bl  
   
  Npm descargará el paquete e instalará la última versión disponible en la  
  carpeta node_modules. Todos los paquetes instalados ahí pueden cargarse  
  desde tu programa usando require sin prefijo. Ejemplo:  
   
     var bl = require('bl')  
   
  Node busca primero en su núcleo de módulos y si no lo encuentra busca en  
  node_modules.  
   
  En caso de no tener conexión a Internet, simplemente crea una carpeta  
  node_modules y copia el paquete desde el directorio de instalación de  
  learnyounode, es decir:  
   
  file:///home/jhon/.nvm/versions/io.js/v3.3.1/lib/node_modules/learnyounode  
  /node_modules/bl  
  file:///home/jhon/.nvm/versions/io.js/v3.3.1/lib/node_modules/learnyounode  
  /node_modules/concat-stream  
   
  Ambos paquetes pueden usar un stream piped para capturar los datos. Una  
  vez que se acaba el stream se dispara un callback con todos los datos:  
   
     response.pipe(bl(function (err, data) { /* ... * / }))  
     // or  
     response.pipe(concatStream(function (data) { /* ... * / }))  
   
  Recuerda hacer data.toString() para convertir al Buffer de Node a String.  */