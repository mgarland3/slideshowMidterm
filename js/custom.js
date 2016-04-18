$(document).ready(function() {
    
//    $(function(){
//        $(".item").accordion();
//    });
    
    $( function() {
        $("#nav ul li").click(function() {
            $("#nav ul li").removeClass("currentItem");
            $(this).addClass("currentItem");
        });
    });
    
    $("#button1").click(function() {
            $(".steps").hide();
            $("#intro").hide();
            $("#content1").slideDown(1800);
    });

    $("#button2").click(function() {
            $(".steps").hide();
            $("#intro").hide();
            $("#content2").slideDown(1800);              
    });
    
    $("#button3").click(function() {
            $(".steps").hide();
            $("#intro").hide();
            $("#content3").slideDown(1800);              
    });
    
    $("#button4").click(function() {
            $(".steps").hide();
            $("#intro").hide();
            $("#content4").slideDown(1800);              
    });
    
    $("#button5").click(function() {
            $(".steps").hide();
            $("#intro").hide();
            $("#content5").slideDown(1800);              
    });
    
        $("#forward").click(function(){
            var nextDiv = $(".steps:visible").next(".steps");
            if (nextDiv.length == 0){
                nextDiv = $(".steps:first");
            }
            $(".steps").hide();
            $("#intro").hide();
            nextDiv.fadeIn(500);
        });
    
        $("#previous").click(function(){
            var prevDiv = $(".steps:visible").prev(".steps");
            if (prevDiv.length == 0){
                prevDiv = $(".steps:last");
            }
            $(".steps").hide();
            $("#intro").hide();
            prevDiv.show("slow");
    });
  
});