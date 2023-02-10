/* Developer: Sunil Kumar
     Code Purpose: Hide elements by clicking a button */
$(function(){
    $("button").click(function(){
        $("p:first").hide();
    });
});