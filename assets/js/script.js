$(document).ready(function() {
//     $("body").css("overflow", "hidden");
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(); // jQuery Function Number 1
        progressBarUpdate(scrollTop, $(document).height() - $(window).height());
        removeAllActiveMenus();
    });
    
    $(".category").click(function() { // jQuery Function Number 2
        var name = "#popup-menu-" + $(this).text();
        if ($(name).hasClass("active-pop")) { // jQuery Function Number 3
            removeAllActiveMenus();
//             $("#warning").hide();
        }
        else {
            removeAllActiveMenus();
            $(name).addClass("active-pop"); // jQuery Function Number 4
            $(name).removeClass("inactive-pop"); // jQuery Function Number 5
//             $("#warning").show();
        }
    });
    
    function removeAllActiveMenus() {
        $("#popup-menu-entrees").addClass("inactive-pop"); 
        $("#popup-menu-sides").addClass("inactive-pop");
        $("#popup-menu-desserts").addClass("inactive-pop");
        $("#popup-menu-entrees").removeClass("active-pop");
        $("#popup-menu-sides").removeClass("active-pop");
        $("#popup-menu-desserts").removeClass("active-pop");
    }
    
    $(".overlay").click(function() {
        var name = "#popup-menu-" + $(this).text().toLowerCase().trim();
        if ($(name).hasClass("active-pop")) {
            $(name).removeClass("active-pop");
            $(name).addClass("inactive-pop");
        }
        else {
            $(name).addClass("active-pop");
            $(name).removeClass("inactive-pop");
        }
    });
    
    $("#footer").click(function() { 
        if ($("#about").css("display", "none")) { // jQuery Function Number 6
            $("#about").fadeIn(); // jQuery Function Number 7
            $("#page-overlay").fadeIn();
        }
    });
    $("#page-overlay").click(function() {
        $("#about").fadeOut(); // jQuery Function Number 8
        $("#page-overlay").fadeOut();
    });
    $("#about").click(function() {
        $("#about").fadeOut();
        $("#page-overlay").fadeOut();
    });
    
    $("#typeit").typeIt({
        strings: ["I hope you enjoy", "my taste of Home.", "Welcome."],
        speed: 50,
        startDelete: true,
        breakLines: false,
        autoStart: false
    });
});





/*******PROGRESS BAR JS *******/

function rotate(element, degree) {
    element.css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
    });
}

function progressBarUpdate(x, outOf) {
    var firstHalfAngle = 180; /* 180*/
    var secondHalfAngle = 0; /* 0 */

    // caluclate the angle
    var drawAngle = x / outOf * 360;

    // calculate the angle to be displayed if each half
    if (drawAngle <= 180) {
        firstHalfAngle = drawAngle;
    } else {
        secondHalfAngle = drawAngle - 180;
    }

    // set the transition
    rotate($(".slice1"), firstHalfAngle);
    rotate($(".slice2"), secondHalfAngle);
}