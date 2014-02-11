
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use("/public", express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var todos = [
    { 
        description: "Buy Groceries",
        due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        done: false
    },
    { 
        description: "Do Laundry",
        due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        done: false
    },
    { 
        description: "Rescue puppies from burning building",
        due : new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
        done: true
    }    
];
app.get('/', routes.index(todos));
app.get('/users', user.list);
app.get('/tests', routes.tests);

app.post('/todo.json', routes.addTodo(todos));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//var Mongoose = require('mongoose');
//var db = Mongoose.createConnection('localhost', 'simplevent');