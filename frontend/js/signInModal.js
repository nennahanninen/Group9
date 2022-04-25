$("#signInLink").click(function(){
    $(".signUpModal").hide();
    $(".signInModal").css("display", "block");
});

$(".close-btn").click(function(){
    $(".signInModal").css("display", "none");
});

$(document).click(function(e){
    if($(e.target).is(".signInModal")) {
        $(".signInModal").fadeOut(300);
    }
});

$("#signUpLink").click(function(){
    $(".signInModal").hide();
    $(".signUpModal").css("display", "block");
});