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

//res.render display thes page that you send it to.
app.get('/',(req, res)=>{   
    res.render('index.hbs',{title:"This is the title", name:"Pete"})
});

//res.send 'sends'what you tell it to, to the screen.
app.get('/send',(req, res)=>{
    res.send('<h2>Go Pats!!! Lets Go!!!<h2>')    
});

app.get('/stuff',(req, res)=>{    
    res.send({words:'blah'})
});

app.get('/form',(req, res)=>{    
    res.render('form.hbs')
});

//Use this when sending data from another page, like a form.
//What does this do 'santa:req.query.present'?????
//Because it is looking in /banana for .query?
//How do I fix this?
app.post('/banana', (req, res)=>{
    res.render('banana.hbs', {name:req.body.name});
})

// app.get('/banana', (req, res)=>{
//     res.render('banana.hbs', {santa:req.query.present});
// })

// app.get('/banana',(req, res)=>{    
//     res.render('banana.hbs', {name:'yummy'})
// });

// What is the difference betwwen app.get and app.all?

// app.all('/banana',(req, res)=>{
//     res.render('banana.hbs', {name:'yummy'})
// });

app.listen(3000, ()=>{
    console.log('Server is up at location 3000')
})