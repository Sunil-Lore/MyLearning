/* Developer: Sunil Kumar
    Code: Displays hide and show effects on an 
    html element */
$(function(){
    $("#hideme").click(function(){
        $("p").hide();
    });
    $("#showme").click(function(){
        $("p").show();
    });
});