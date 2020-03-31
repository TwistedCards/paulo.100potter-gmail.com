var app = require('./config/server.js');

app.get('/', function(req, res){
    res.render("home/home");
});

app.listen(3000, function(){
    console.log("Server ON");
});