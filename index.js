var express = require('express')
    ,path   = require('path')
    ,cookieParser = require('cookie-parser')
    ,csrf = require('csurf');

// create express app
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// setup route middlewares
var csrfProtection = csrf({ cookie: true });

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());


//route index
app.get('/', csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.sendFile(path.join(__dirname + '/views/index.views.html'), { csrfToken: req.csrfToken() });
});


app.listen('8080', function(req, res){
    console.log('server is listening to port .....8080');
});