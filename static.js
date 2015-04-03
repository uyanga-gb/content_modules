var fs= require('fs');
 module.exports = function(request, response){
 	if(request.url.match(/(html)$/)!==null) {
	    fs.readFile('.'+request.url, 'utf8', function (errors, contents){
	    if(!errors)
        {
		    response.writeHead(200, {'Content-Type': 'text/html'});
		    response.write(contents);
		    response.end();
		}
    	})
	}
 	 else if(request.url.match(/(jpg)$/) !== null) {
        fs.readFile('.'+request.url, function (errors, contents){
            if(!errors)
            {
                response.writeHead(200, {'Content-Type': 'image/jpg'});  
                response.write(contents); 
                response.end();
            }
         })
    }
    else if(request.url.match(/(.css)$/)!==null) {
    	fs.readFile('.'+request.url, 'utf8', function (errors, contents){
    		if(!errors)
            {
		     	response.writeHead(200, {'Content-Type': 'text/css'});
		    	response.write(contents);
		     	response.end();
		    }
    	})
	}
   else {
   	 	response.writeHead(404,'Error: File not found');
     	response.end('File not found!!!');
  }
}

