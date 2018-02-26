var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send("<html> <body> Pagina Inicial. </body> </html>");
});

app.get('/tecnologia', function(req, res){
	res.render("secao/tecnologia");
});

app.get('/moda', function(req, res){
	res.send("<html> <body> Portal de Moda. </body> </html>");
});

app.listen(3000, function(){
	console.log('Servidor Express Rodando...');
});