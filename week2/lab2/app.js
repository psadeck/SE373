var express = require ('express');
var hbs = require('hbs');

//Express Object
var app = express();
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('today', ()=>{
    var date = new Date();
    return date;
});

app.set('view engine' , 'hbs');
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));


app.use('/', (req,res, next)=>{
console.log(new Date());
next();
});

//res.render displays the page that you send it to.
app.get('/',(req, res)=>{   
    res.render('index.hbs')
});

app.get('/form',(req, res)=>{    
    res.render('form.hbs')
});

app.get('/about',(req, res)=>{    
    res.render('about.hbs')
});

app.get('/results',(req, res)=>{    
    res.render('results.hbs')
});

//Use this when sending data from another page, like a form.
app.post('/results', (req, res)=>{
    res.render('results.hbs', {name:req.body.name, email:req.body.email});
})

app.listen(3000, ()=>{
    console.log('Server is up at location 3000')
})