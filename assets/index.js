$(function(){
    console.log("Hello world!");
    $menu = $("div.button");
    $nav = $("nav");

    // When the user scrolls the page, execute myFunction
//     window.onscroll = function() {myFunction()};
//     $('.carousel').carousel({
//   interval: 200;
// })

    // Get the navbar
    var navbar = document.getElementById("drop-menu");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

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
            $nav.css("height", "100%");
            $(".bar").css("background-color", "rgb(255,255,255)");
            $('ul.main-nav').css("display", "block");
            $nav.css("display", "block");
        }
    });

    /* Close */
    function closeNav() {
        $($nav).css("height", "10%");
        $('ul.main-nav').css("display", "none");
    }

});
