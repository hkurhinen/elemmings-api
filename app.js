
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , weather = require('./routes/weather')
  , bodyParser = require('body-parser')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.get('/', routes.index);
router.get('/weather/:location', weather.get);

app.use('/api', router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
