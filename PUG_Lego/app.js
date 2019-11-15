var express = require('express');
var app = express();
const legoj = require('./json/lego.json');



app.use(express.static(__dirname + '/public')); 
app.set('view engine', 'pug'); 


app.listen(3000, function()
{
    console.log("Server avviato sulla porta 3000");
    
});

app.get('/', function(req, res)
{
    res.render('index.pug', {legos : legoj.lego});
});

app.get('/lego', function(req, res){
    const mods = legoj.lego.find(l => l.SetNumber === req.query.n);
    console.log(mods);
    res.render('instruction', {mod : mods});
});