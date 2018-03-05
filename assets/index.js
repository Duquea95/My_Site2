$(function(){
    console.log("Hello world!");
    $menu = $("div.button");
    $nav = $("nav");

    /* Button Function */
    $menu.on('click',function(){
        if($menu.hasClass("change")){
            $menu.removeClass("change")
            closeNav($nav);
        }
        else{
            openNav($nav);
            $menu.addClass("change");
        }

        /* Open */
        function openNav(){
            console.log("Open Nav");
            $($nav).css("height", "100%");
            $(".bar").css("background-color", "rgb(255,255,255)");
            $(".bar").css("opacity", "rgb(255,255,255,1)");
        }
    });

    /* Close */
    function closeNav() {
        $($nav).css("height", "0%");
        // $(".bar").css("background-color", "rgba(0,0,0,1)");
    }

});
