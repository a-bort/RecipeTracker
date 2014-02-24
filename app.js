
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var http = require('http');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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
app.use(express.cookieParser()); //authentication
app.use(express.session({ secret: 'mongoloid'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use("/public", express.static(path.join(__dirname, 'public')));

var Mongoose = require('mongoose'); //database
var db = Mongoose.createConnection('localhost', 'simplevent');

var UserSchema = require('./models/User').UserSchema;
var User = db.model('user', UserSchema);
//configure authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

require('./routes/eventList')(app, db);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/tests', function(req, res){
  res.render('tests/runner', { title: 'End to end Tests'});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});