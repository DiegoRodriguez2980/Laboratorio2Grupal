var http = require('http'),
fs = require('fs');

http.createServer(function (req, res) {
    
 res.writeHead(200, {'Content-Type': 'text/html '});

 var url = req.url;
 
 if(url ==='/nosotros'){
    res.write(fs.readFileSync('./nosotros.html'));
    res.end();
 }else if(url ==='/contactos'){
    res.write(fs.readFile('./nosotros.html')); 
    res.end(); 
}else if(url ==='/servicios'){
    res.write(fs.readFile('./nosotros.html')); 
    res.end(); 
}else if(url ==='/catalogo'){
    res.write(fs.readFile('./nosotros.html')); 
    res.end(); 
 }else{
    res.write(fs.readFileSync('./vallume/index.html')); 
    res.end(); 
 }

}).listen(3000, function(){
 console.log("server start at port 3000"); 
});