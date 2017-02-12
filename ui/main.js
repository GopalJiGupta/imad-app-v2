console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function(){
    
    //create a request
    var request = new XMLHttpRequest();
    //and capture the responce 
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              var counter = request.responceText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
          }
      }  
    };
    //make the request 
    request.open('GET', 'http//http://gopaljigupta.imad.hasura-app.io/counter', true);
    request.send(null);
};