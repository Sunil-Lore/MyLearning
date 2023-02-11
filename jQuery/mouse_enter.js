/* Developer: Sunil K.
    Code Purpose: display a message when
    mouse enters a specific element area
*/
$(function(){
    $("p").mouseenter(function(){
        alert("You enterd specific paragraph");
    });
});