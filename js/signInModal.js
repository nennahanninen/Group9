$("#signInLink").click(function(){
    $(".registerModal").hide();
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

$("#registerLink").click(function(){
    $(".signInModal").hide();
    $(".registerModal").css("display", "block");
});