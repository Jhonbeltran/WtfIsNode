/*   ## MY FIRST I/O! (Exercise 3 of 13)  
   
  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  To perform a filesystem operation you are going to need the fs module from  
  the Node core library. To load this kind of module, or any other "global"  
  module, use the following incantation:  
   
     var fs = require('fs')  
   
  Now you have the full fs module available in a variable named fs.  
   
  All synchronous (or blocking) filesystem methods in the fs module end with  
  'Sync'. To read a file, you'll need to use  
  fs.readFileSync('/path/to/file'). This method will return a Buffer object  
  containing the complete contents of the file.*/



//To perform a filesystem operation you are going to need the fs module
var fs = require('fs')

//process.argv help me to read the elements in the console as a array
//In which case the output would be an array looking something like:
//[ 'node', '/path/to/your/program.js', '1', '2', '3' ] 
/*All synchronous filesystem methods end with 'Sync' 
To read a file you'll need .readFileSync*/
var contents = fs.readFileSync(process.argv[2])


//.toString convert all the buffer into string
/* If you're looking for an easy way to count the number of newlines in a  
  string, recall that a JavaScript String can be .split() into an array of  
  substrings and that '\n' can be used as a delimiter.*/
var lines = contents.toString().split('\n').length - 1  
console.log(lines) 

//with this comand we can see how the program works
//$ node 3myfirstio.js 1helloworld.js
