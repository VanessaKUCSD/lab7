var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response, viewAlt){
  	response.render('index', projects);
		projects["viewAlt"] = false;
};

exports.viewAlt = function(request, response, viewAlt){
  	response.render('index', projects);
		projects["viewAlt"] = true;
};