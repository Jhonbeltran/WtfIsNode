/*MY FIRST ASYNC I/O! (Exercise 4 of 13)  
   
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 # HINTS  
   
  The solution to this problem is almost the same as the previous problem  
  except you must now do it the Node.js way: asynchronous.  
   
  Instead of fs.readFileSync() you will want to use fs.readFile() and  
  instead of using the return value of this method you need to collect the  
  value from a callback function that you pass in as the second argument. To  
  learn more about callbacks, check out:  
  [https://github.com/maxogden/art-of-node#callbacks](https://github.com/max  
  ogden/art-of-node#callbacks).  
   
  Remember that idiomatic Node.js callbacks normally have the signature:  
   
     function callback (err, data) { /* ... * / }  
   
  so you can check if an error occurred by checking whether the first  
  argument is truthy. If there is no error, you should have your Buffer  
  object as the second argument. As with readFileSync(), you can supply  
  'utf8' as the second argument and put the callback as the third argument  
  and you will get a String instead of a Buffer.*/


//Callbacks
/*First you split your code up into functions, and then use callbacks to declare
 if one function depends on another function finishing.*/

//js module to access to the file system 
/*var fs = require('fs')

//Var where I gonna store the number  
var myNumber = undefined

//function that recive a callback as an argument 
function addOne(callback) {
	// .readFile is going to read an element of the console array and then when the 
	// reading is done will start a function doneReading that could give me an error 
	// or the fileContents
  	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    //I parse the content into a integer
    myNumber = parseInt(fileContents)
    myNumber++
    //And finally I excute the callback
    callback()
  })
}

//This function will be de callback!
function logMyNumber() {
  console.log(myNumber)
}

//Here i call the function with the callback that require
addOne(logMyNumber)*/


/*This kind of linear (step-by-step, in order) code isn't the way that node works. If this code were to get executed then readFile and processFile would both get executed at the same exact time. This doesn't make sense since readFile will take a while to complete. Instead you need to express that processFile depends on readFile finishing. This is exactly what callbacks are for! And because of the way that JavaScript works you can write this dependency many different ways:

var fs = require('fs')
fs.readFile('movie.mp4', finishedReading)

function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
}
But you could also structure your code like this and it would still work:

var fs = require('fs')

function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
}

fs.readFile('movie.mp4', finishedReading)
Or even like this:

var fs = require('fs')

fs.readFile('movie.mp4', function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
})*/

//read the 3er element of the console array
var file = process.argv[2] 
//require file system
var fs = require('fs')
//var to store the number of lines
var lines = undefined

//Function that recive a callback
function newLines(callback) {
	//readFile recive the file and as a last argument has a callback,
	//remember "the error as a first argument"
	fs.readFile(file, function doneReading(err, fileContents) {
	    if (err) console.log('Error')
	   	//Else
	    lines = fileContents.toString().split('\n').length -1 
	    //Now call the function (in this cases is de function called show)
	    callback()
	    }
  )
}

function show(argument) {
	console.log(lines)
}

//we call the function with the callback
newLines(show)