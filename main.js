var app = require('./config/server.js');

var home = require('./views/home/modulos/home');

home(app);

app.listen(3000, function(){
    console.log("Server ON");
});