$(document).ready(function(){
    $("#clickContact").click(function() {
        $("#bg-modal").css("display","flex","block");
    })
    $(".close").click(function() {
        $("#bg-modal").css("display","none");
    })
});