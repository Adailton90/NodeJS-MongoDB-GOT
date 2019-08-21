module.exports.jogo = function(application, req, res){
	if(req.session.autorizado !== true){
		res.send('Usuario precisa fazer login');
		return;
	}
	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	JogoDAO.iniciaJogo();
	res.render('jogo', {img_casa: req.session.casa});
}

module.exports.sair = function(application, req, res){	
	req.session.destroy( function(err){
		res.render("index", {validacao:{}});
	});
}