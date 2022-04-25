
// Entire screen:
const modal = $(".signUpModal");

const openBtn = $("#sign-up");
const closeBtn = $(".close-btn");

// When clicked:
$("#sign-up").click(function(){
    $(".signUpModal").css("display", "block");
});

$(".close-btn").click(function(){
    $(".signUpModal").css("display", "none");
});

$(document).click(function(e){
    if($(e.target).is(".signUpModal")) {
        $(".signUpModal").fadeOut(300);
    }
});