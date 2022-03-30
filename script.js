var button = document.getElementById('btn');
var idd = 0;

//function for deleting the todo list
function delet(id){
	 var elem = document.getElementById(id);
	 elem.remove();

	 var comp = document.querySelectorAll('.check');
     var m = 0;
     var j=0;
     comp.forEach(elem => {
       if(!elem.checked){
       m++;
       }
     });
    document.getElementById('count').innerHTML = m;
}

//create the element on insert click
function insert(){

    var comp = document.querySelectorAll('.check');
    var par = document.getElementById('para');
    var child = par.children;
    var arr = [];
    var i = 0;
    var j=0;
    var m =1;

    comp.forEach(element => {
      if(element.checked){     	
      	arr[j] = i;
      	j++;
      }
      else{
      	m++;
      	console.log(m);
      }
      element.checked = false;
      i=i+1;

      });


     var input = document.getElementById('todo').value;
     document.getElementById('todo').value = "";
     idd = idd+1;

     document.getElementById('para').innerHTML += "<p id="+idd+"><input type='checkbox' class='check' id="+idd+"><span class='span'>"+input+"</span><button class='hidedelete' onclick='delet("+idd+")'>X</button></p>";


      var comp1 = document.querySelectorAll('.check');
      var k=0;
      var l=0;
      comp1.forEach(element => {
        if(arr[k]==l){
        	element.checked = true;
        	k++;
        }
          l++;
      })

      document.getElementById('count').innerHTML = m;	


}

//function for showing the complete list
function completed(){

	  var comp = document.querySelectorAll('.check');
	  var par = document.getElementById('para');
    var child = par.children;
	//console.log(comp);
  	var j=0;
  	comp.forEach(element => {
      if(element.checked){
        var current = child[j];
        console.log(current);
        current.classList.remove("hiding");
      }
      else{
        var current = child[j];
        current.classList.add("hiding");
      }
      j=j+1;

      });

}

//function for showing the pending list 
function pending(){

	 var comp = document.querySelectorAll('.check');
	 var par = document.getElementById('para');
   var child = par.children;
	//console.log(comp);
  	var j=0;
	  var k=0;
  	comp.forEach(element => {
      if(!element.checked){
      	k++;
        var current = child[j];
        current.classList.remove("hiding");
      }
      else{
        var current = child[j];
        current.classList.add("hiding");
      }
      j=j+1;
      });
  document.getElementById('count').innerHTML = k;
}


//function for showing the pending and complete list
function all1(){

	    var comp = document.querySelectorAll('.check');
	    var par = document.getElementById('para');
      var child = par.children;
	
	    var j=0;
    	comp.forEach(element => {
      
        var current = child[j];
        console.log(current);
        current.classList.remove("hiding");
      
        j=j+1;
      });

}


//add class to the checked and add them to the completed
function addclassudcompl(){
	  var comp = document.querySelectorAll('.check');
    var par = document.getElementById('para');
    var child = par.children;
    var m = 0;
    var j=0;

    comp.forEach(elem => {
      if(!elem.checked){
      m++;
      var current = child[j];
      current.classList.remove("completed");
      }
      j=j+1;
    })

    var i = 0;
    comp.forEach(element => {
      if(element.checked){
      	//console.log(child[i]);
      	var current = child[i];
      	current.setAttribute( 'class', 'completed' );
      }
      i=i+1;
      });
    document.getElementById('count').innerHTML = m;

}
