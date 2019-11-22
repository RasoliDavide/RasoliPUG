var express = require('express');
var app = express();

var path = require('path');
var cors = require('cors');
app.use(cors());
app.use(express.static(__dirname + '/public')); 
const legoj = require('./public/json/lego.json');
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
    const mods = legoj.lego.find(l => l.SetNumber === req.query.id);
    console.log(mods);
    res.render('instruction', {mod : mods});
});

app.get('/api', function(req, res){
    if(req.query.id == null)
        res.sendFile(path.join(__dirname + '/public/json/lego.json'));
    else
    {
        const mods = legoj.lego.find(l => l.SetNumber === req.query.id);
        res.send(JSON.stringify(mods));
    }
});
