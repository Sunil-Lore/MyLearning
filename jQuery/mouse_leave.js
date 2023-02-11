/* Written by : Sunil K.
    Purpose: displays a message when someone 
    leaves an element.
*/
$(function(){
    $("p").mouseleave(function(){
        alert("You are leaving this paragraph.");
    });
});