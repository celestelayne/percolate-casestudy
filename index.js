	var express = require('express'),
				bodyParser = require('body-parser'), // get parameters from POST requests
				validator = require('express-validator'),
				path = require('path');

	var app = express();
	var views = path.join(process.cwd(), 'views');

	// middleware
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(validator());
	app.use(express.static("public"));

	/*---------->>> STATIC PAGE ROUTES <<<----------*/

	// a "GET" request to "/" will run the function below
	app.get("/", function (req, res) {
	    // send back the file: 'home.html'
	    var homePath = path.join(views, "index.html");
	    res.sendFile(homePath);
	});

	app.post("/percolate", function (req, res){
		req.checkBody("FirstName", "Enter your first name.").notEmpty();

		var errors = req.validationErrors();
		if(errors){
			res.render('create', { errors: errors});
			return;
		} else {
			// normal processing?
		}
	});

	/*---------->>> SERVER <<<----------*/

	app.listen(3000, function () {
	    console.log("Go to localhost:3000/");
	});