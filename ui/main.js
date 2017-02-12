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

var nameinput = document.getElementById('name');
var name = nameinput.value;
var submitbt = document.getElementById('submit_bt');
 submitbt.onclick = function () {
   //make a request to the server and send name
   //caputure the list and rander with list
   var names = ['name1','name2','name3','name4'];
   var list = '';
   for(var i=0; i<names.length; i++)
   {
       list += '<li>' + names[i] + '</li>';
   }
   var  ul = document.getElementById(namelist);
   ul.innerHTML = list;
 };
