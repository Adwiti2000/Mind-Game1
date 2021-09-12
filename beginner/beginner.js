$(document).ready(function(){
  var box = [];
var n = 0;
 box[0] = document.getElementById("box1");
 box[1 ]= document.getElementById("box2");
  box[2] = document.getElementById("box3");
  box[3] = document.getElementById("box4");
 box[4]= document.getElementById("box5");
  box[5] = document.getElementById("box6");
  
  document.getElementById("start_button").onclick = function()
   {  var random_box_number = box[Math.floor(Math.random()*6)];
     random_box_number.classList.add('box_to_select');
   
    
};
function get_random_box_id(clicked){
   var check =  document.getElementById(clicked);
   if(check.classList.contains('box_to_select'))
    {
      check.classList.remove('box_to_select');
      var random_box_number_second = box[Math.floor(Math.random()*6)];
      random_box_number_second.classList.add('box_to_select');
    }
    
};


});

    


 

