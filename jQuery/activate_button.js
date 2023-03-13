$('.accept').click(function() {
	if ($('#activate').is(':disabled')) {
    	$('#activate').removeAttr('disabled');
    } else {
    	$('#activate').attr('disabled', 'disabled');
    }
});