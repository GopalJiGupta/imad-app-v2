console.log('Loaded!');

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //make a request to the counter endpoint.
    
    //and capture the responce 
    
    //randering the variable in correct variable
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};