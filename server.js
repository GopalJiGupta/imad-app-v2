var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articalOne={  
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res){
     res.send(createTemplet(articalOne));
});

app.get('/artical-two', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-two.html')); 
});

app.get('/artical-three', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-three.html')); 
});

app.get('/artical-four', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-four.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
