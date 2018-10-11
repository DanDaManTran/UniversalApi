const axios = require('axios');

module.exports = function(app){
	app.post('/dan', (req,res)=>{
		console.log(req.body)

		return axios({
			 method: req.body.method,
			 url: req.body.url,
			 headers: req.body.header
		})
		.then(result=>{
			console.log('cameback')
		 	return res.json(result)
		})
		.catch(err=>{
			console.log(JSON.stringify(err))
		 	res.send(err);
		});
	});
};
