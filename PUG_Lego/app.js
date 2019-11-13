var express = require('express');
var app = express();
const lego = require('./json/lego.json');
app.use(express.static(__dirname + '/public')); 
app.set('view engine', 'pug');  
app.listen(3000, function()
{
    console.log("Server avviato sulla porta 3000");
});
app.get('/', function(req, res)
{
    res.render('index.pug', lego);
});
app.get('/lego', function(req, res){
    const mod = lego.lego.find((l) => l.SetNumber === req.query.n);
    res.render('instruction', mod);
});