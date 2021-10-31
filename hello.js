var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if(filename == './') {filename = './index';}
  filename = filename + '.html';
  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type':'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    // console.log('...Incoming Request: '+ req.url);
    return res.end();
  })
  
  // var dates = q.year + " "+ q.month;
  // res.write(dates);
}).listen(8080);
console.log('Server Listening to port 8080...');