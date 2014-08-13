var request = require('request')
  , cheerio = require('cheerio');

exports.get = function(req, res){
  var location = req.params.location;
  var url = 'http://ilmatieteenlaitos.fi/saa/'+location;
  request(url, function(err, resp, body) {
      if (err){
          throw err;
      }
      $ = cheerio.load(body);
      var response = "";
      $('.parameter-name-value').each(function(){
    	  response += $(this).text()+" ";
      });
      res.json({msg : response});
  });
};