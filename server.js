var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals={
    'artical-one': {  
    title: 'gopal first artical',
    heading: 'my artical',
    date: '2/2/2017',
    contain: ` <p>
                My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.
            </p>
            <p>
                My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.
            </p>
            <p>
                My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.My name is Gopal ji gupta and i am hardworker and selfmotivater.
            </p>`
},
    'artical-two': {
    title: 'gopal second artical',
    heading: 'my second artical',
    date: 'feb 10, 2017',
    contain: ` <p>
                My name is Gopal ji gupta and i am hardworker and selfmotivater.`
    }
};

function createTemplet(data)
{
 var title = data.title;
 var contain = data.contain;
 var date = data.date;
 var heading =  data.heading;
 var htmltemplet = `
<!DOCTYPE html>
<html>
   <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
    </head>
     <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h1>
           ${heading} 
        </h1>
        <div>
           ${date}
        </div>
          ${contain}
        </div>
         </div>
    </body>
</html>
`;
return htmltemplet;
}

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalname',function(req, res){
    var articalname= req.params.articalname;
   res.send(createTemplet(articals[articalname])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name/:name', function (req, res){
    
    //get name from the request
    var name= req.params.name;
    names.push(name);
    //JSON : javascript object notation
    res.send(JSON.stringify(names));
    
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
