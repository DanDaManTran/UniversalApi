var glob = require('glob');
var path = require('path');

module.exports = function(app){
	glob.sync( './public/*.html' ).forEach(file=>{
		let fileName = file.split('/')[2].replace('.html', '');

		app.get(`/${fileName}`, (req, res)=>{
			res.sendFile(path.join(__dirname + "/../public", `${fileName}.html`));
		});
  });
};
