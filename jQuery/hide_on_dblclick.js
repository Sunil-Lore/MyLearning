/* Developer: Sunil Kumar
     Code Purpose: Hide elements by clicking a button */
$(function(){
    $("Button").dblclick(function(){
        $("p").hide();
    });
});