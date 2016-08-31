var express = require('express');
var app = express();
var useragent = require('express-useragent');
var PORT = 8080;
var return_obj = {};

app.enable('trust proxy'); //added this line to get correct ip address through req.ip

app.use(useragent.express());

app.get('/whoami', function(req, res){
   var lang = req.acceptsLanguages('en-US', 'fr', 'es', 'en');
   return_obj.ipaddress = req.ip;
   if(lang){
       return_obj.language = lang;
   }
   return_obj.software = req.useragent.platform+';'+req.useragent.os;
   res.json(return_obj);
});

app.listen(PORT, function(){
    console.log('Express listening on: '+PORT);
})