console.log('Loaded!');

//html text change by JS

var element = document.getElementById('main-text');

element.innerHTML = 'Hi! I am Gopal and i am a begginer of this course(nodejs). this is a new code change by javascript ';

//chaning Image

var img = document.getElementById('jimg');
img.onclick = function(){
    img.style.marginLeft= '100px'; 
}; 