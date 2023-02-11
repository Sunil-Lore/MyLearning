/* Developer: Sunil K.
    Code Purpose: display the functioning
    of focus event in jQuery */
$(function(){
    $("input").focus(function(){
        $(this).css("background-color","gray")
    });
});