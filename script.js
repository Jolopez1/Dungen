$(".bo").hide();
$("p").hide();
$("#button").click(function() {
    $(".rock").show();
    $("#first").show();
    $("#button").hide();
});
$(".rock").click(function() {
    $(".dragon").show();
    $(".rock").slideToggle();
    $("#first").hide();
    $("#fip").show();
});
$(".dragon").dblclick(function() {
    $(".dragon").hide();
    $("#fip").hide();
    $(".dead").show();
    $("#sp").show();
    
});
$(".dragon").dblclick(function() {
    $(".dragon").hide();
    $("#fip").hide();
    $(".dead").show();
    $("#sp").show();
    
});
$(".dragon").dblclick(function() {
    $(".dragon").hide();
    $("#fip").hide();
    $(".dead").show();
    $("#sp").show();
    
});
$(".dragon").dblclick(function() {
    $(".dragon").hide();
    $("#fip").hide();
    $(".dead").show();
    $("#sp").show();
    
});
$(".dead").mouseleave(function() {
    $(".dead").hide();
    $("#fip").hide();
     $("#tp").show();
    $(".sword").show();
    $("#sp").hide();
    
});

$(".sword").click(function() {
    $("#tp").hide();
     $("#do").show();
});






