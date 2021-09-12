$(document).ready(function(){
    $("#start").click(function(){
       $("#start").addClass("ui-state-disabled");
       $("#select_level").css("visibility","visible");
    });
    $("#circle1").mouseover(function(){
        $("#circle1").css("background-color","rgb(255, 215, 0,0.8)")
        $("#beginner").css("visibility","visible");
    });
    $("#circle1").mouseout(function(){
        $("#circle1").css("background-color","white")
        $("#beginner").css("visibility","hidden");
    });
    $("#circle2").mouseover(function(){
        $("#circle1").css("background-color","rgb(255, 215, 0,0.8)")
        $("#circle2").css("background-color","rgb(255, 215, 0,0.8)")
        $("#medium").css("visibility","visible");
    });
    $("#circle2").mouseout(function(){
        $("#circle1").css("background-color","white")
        $("#circle2").css("background-color","white")
        $("#medium").css("visibility","hidden");
    }); 
    $("#circle3").mouseover(function(){
        $("#circle1").css("background-color","rgb(255, 215, 0,0.8)")
        $("#circle2").css("background-color","rgb(255, 215, 0,0.8)")
        $("#circle3").css("background-color","rgb(255, 215, 0,0.8)")
        $("#advance").css("visibility","visible");
    });
    $("#circle3").mouseout(function(){
        $("#circle1").css("background-color","white")
        $("#circle2").css("background-color","white")
        $("#circle3").css("background-color","white")
        $("#advance").css("visibility","hidden");
    }); 
});
