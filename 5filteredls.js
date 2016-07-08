/*## FILTERED LS (Ejercicio 5 de 13)  
   
  Crea un programa que dado un directorio imprima una lista de archivos  
  filtrados por la extensión. El primer argumento será la ruta al directorio  
  (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si  
  recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.  
   
  Nota: el segundo argumento no incluye el punto '.'.  
   
  La lista de archivos a imprimir en consola debe hacerse un archivo por  
  línea y debes utilizar Async I/O.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## PISTAS  
   
  La función fs.readdir() recibe como parámetros: una ruta(path) y un  
  callback. La firma del callback es:  
   
     function callback (error, lista) { /* ... * / }  
   
  La lista es un arreglo de nombres de archivos de tipo String*/

//require 'file system' to read the directory
var fs = require('fs')  
//I use 'path' to avoid the probles with the routes in diferent operative systems
var path = require('path')  

//I use the .readdir of fs to read de directory, the second arg is a callback
//the callback is called doneReading and give me the list in an array
fs.readdir(process.argv[2], function doneReading(err, list) {  
	//.forEach is used to read all the elements into the array of readdir 
	//the function that have inside concat the names with the extension name
      list.forEach(function (file) {  
        if (path.extname(file) === '.' + process.argv[3])  
          console.log(file)  
    })  
})

//The way to use this little program is:
// $ node 5filteredls.js a js   