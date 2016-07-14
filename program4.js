 var fs = require('fs'); 
 var path = require('path'); 

 var directory = process.argv[2];
 var extension = "." + process.argv[3];  
 var result = [];  

 fs.readdir(directory, function (err, list) {
 	if (err) return console.error(err);
 	for (var i = 0; i<list.length; i++){
 		if (path.extname(list[i])===extension){
 			result.push(list[i]); 
 		}
 	}
 	 console.log(result.join("\n")); 
 })

