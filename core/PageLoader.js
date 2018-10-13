var glob = require('glob');
var path = require('path');

module.exports = function(app){
	glob.sync( './public/*.html' ).forEach(file=>{
		let fileName = file.split('/')[2].replace('.html', '');

		if(fileName === 'index'){
			app.get(`/`, (req, res)=>{
				res.sendFile(path.join(__dirname + "/../public", `${fileName}.html`));
			});
		} else {
			app.get(`/${fileName}`, (req, res)=>{
				res.sendFile(path.join(__dirname + "/../public", `${fileName}.html`));
			});
		}
  });
};
