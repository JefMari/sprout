// Auto resize textarea

$('.form-group').on( 'change keyup keydown paste cut', 'textarea', function (){
    $(this).height(0).height(this.scrollHeight);
}).find( 'textarea' ).change();



// TABLE TOGGLE

$(document).ready(function() {
	$('.table-togglable tbody tr').click(function(){
		var aHref = $(this).find('a').attr('href');
		window.open(aHref, '_blank');
	});
});
