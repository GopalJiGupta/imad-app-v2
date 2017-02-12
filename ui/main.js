console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function(){
    
    //create a request
    var request = new XMLHttpRequest();
    //and capture the responce 
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              var counter = request.responseText;   
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
          }
      }  
    };
    //make the request 
    request.open('GET', 'http://gopaljigupta.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit 


var submitbt = document.getElementById('submit_bt');
 submitbt.onclick = function () {
    //create a request
    var request = new XMLHttpRequest();
    //and capture the responce 
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
             var names = request.responseText;
             names = JSON.parse(names); 
                 var list = '';
              for(var i=0; i<names.length; i++)
               {
                  list += '<li>' + names[i] + '</li>';
                }
                   var  ul = document.getElementById('namelist');
                    ul.innerHTML = list;
          }
      }  
    };
    
    var nameinput = document.getElementById('name');
    var name = nameinput.value;
      //make the request 
    request.open('GET', 'http://gopaljigupta.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};
