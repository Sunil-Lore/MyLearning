/* Developer: Sunil Kumar
     Code Purpose: Hide a specific element with a unique ID of a page by clicking a button */
$(function(){
    $("Button").click(function(){
        $("#turnhide").hide();
    });
});