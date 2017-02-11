console.log('Loaded!');

//html text change by JS

var element = document.getElementById('main-text');

element.innerHTML = 'Hi! I am Gopal and i am a begginer of this course(nodejs). this is a new code change by javascript ';

//chaning Image

var img = document.getElementById('jimg');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft= marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
     
}; 