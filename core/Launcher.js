const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const Promise = require('bluebird');

function Launcher(){
	let self = this;

	self.config = require('../config/config.js')
	self.app = express();
	self.app.use(bodyParser.json());
	self.app.use(bodyParser.urlencoded({ extended: true }));
	self.app.use(bodyParser.text());
	self.app.use(bodyParser.json({ type: "application/vnd.api+json" }));

	self.app.use(express.static(path.join(__dirname, "../public/")));

	require('./PageLoader.js')(self.app);
	require('./RouteLoader.js')(self.app);
}

Launcher.prototype.run = function(){
	let self = this;

	return Promise.resolve()
	.then(()=>{
		return self.app.listen(self.config.port);
	})
};

module.exports = Launcher;
