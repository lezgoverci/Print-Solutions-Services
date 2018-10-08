$(document).ready(function(){
    $("section#home .mainbutton").on("click",function(){
        $("section").addClass("hide-section");
        $("section#templates").removeClass("hide-section");
    });

    $("section#templates .previous-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#home").removeClass("hide-section");
    });

    $("section#templates .next-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#upload").removeClass("hide-section");
    });

    $("section#upload .previous-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#templates").removeClass("hide-section");
    });

    $("section#upload .next-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#styles").removeClass("hide-section");
    });

    $("section#styles .previous-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#upload").removeClass("hide-section");
    });

    $("section#styles .next-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#order").removeClass("hide-section");
    });

    $("section#order .previous-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#styles").removeClass("hide-section");
    });

    $("section#order .next-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#complete").removeClass("hide-section");
    });

    $("section#complete .previous-step").on("click",function(){
        $("section").addClass("hide-section");
        $("section#order").removeClass("hide-section");
    });


    $("#hamburger-menu").on("click",function(){
        $("nav .right").addClass("active");
    });

    $(document).on("click",function(e){
        if(!$(e.target).closest("nav").length){
            if($("nav .right").is(":visible")){
                $("nav .right").removeClass("active");
            }
            
        }
        
    });
});