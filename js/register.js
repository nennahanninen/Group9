
// Entire screen:
const modal = $(".registerModal");

const openBtn = $("#register");
const closeBtn = $(".close-btn");

// When clicked:
$("#register").click(function(){
    $(".registerModal").css("display", "block");
});

$(".close-btn").click(function(){
    $(".registerModal").css("display", "none");
});

$(document).click(function(e){
    if($(e.target).is(".registerModal")) {
        $(".registerModal").fadeOut(300);
    }
});