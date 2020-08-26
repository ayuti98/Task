express = require('express')
app = express();
http = require('http').Server(app);
io = require('socket.io')(http);
bodyParser = require('body-parser'); 
urlencoParser = bodyParser.urlencoded({extended:false});
cookie = require('cookie-parser');
cookieP = require('cookie');

//dns = require('dns')
//iocookie = require('socket.io-cookie-parser');

http.listen(8080);

total = 0
clients = {}

app.use(cookie());
app.use(express.static(__dirname));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/'+'expressServices.html');
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/'+'expressServices.html');
});



//io.use(iocookie())

io.sockets.on('connection', function(socket) {
	total++;
    console.log('User connected '+socket.id);
	
	var name = cookieP.parse(socket.handshake.headers.cookie).name;//socket.request.cookies['name']
	//console.log(name);
	
	//socket.on('register', function() {
    //    console.log('register');
	//	clients[socket.id]=cookieP.parse(socket.handshake.headers.cookie).name;
    //  });
	
	clients[socket.id]=name;
	socket.emit('userdata',{name:name,id:socket.id});
	socket.emit('alluserslist',clients);
	io.sockets.emit('adduserslist',{name:name,id:socket.id});
	console.log('registered');
	
	socket.on('disconnect', function() {
        console.log('disconnect');
		total--;
		delete clients[socket.id];
		io.sockets.emit('removeeuserslist',socket.id);
      });

	  
	socket.on('messageSend', function(data) {
		  io.sockets.sockets[data.to].emit('message',data)
	});
});
	
