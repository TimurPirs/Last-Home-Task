$(function()
{
    /* FIXED HEADER */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    checkScroll(scrollPos, introH);
    
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos, introH);
    });
        
    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    
    /* SCROLL */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 600);
    });
    
    /* NAV */
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        
        
    });
    
})