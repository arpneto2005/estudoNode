module.exports = function(app){
	app.get('/formualrio', function(req, res){
		res.render("admin/form_add_noticias");
	});
}