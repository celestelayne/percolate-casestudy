	var express = require('express'),
				bodyParser = require('body-parser'), // get parameters from POST requests
				path = require('path');

	var app = express();
	var views = path.join(process.cwd(), 'views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static("public"));

	/*---------->>> STATIC PAGE ROUTES <<<----------*/

	// a "GET" request to "/" will run the function below
	app.get("/", function (req, res) {
	    // send back the file: 'home.html'
	    var homePath = path.join(views, "home.html");
	    res.sendFile(homePath);
	});

	/*---------->>> SERVER <<<----------*/

	app.listen(3000, function () {
	    console.log("Go to localhost:3000/");
	});