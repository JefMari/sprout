// Auto resize textarea

// $('.form-group').on( 'change keyup keydown paste cut', 'textarea', function (){
//     $(this).height(0).height(this.scrollHeight);
// }).find( 'textarea' ).change();



// TABLE TOGGLE

$(document).ready(function() {
	$('.table-togglable tbody tr').click(function(){
		var aHref = $(this).find('a').attr('href');
		window.open(aHref, '_blank');
	});
});






//
//
// $("document").ready(function() {
//
//   $('.dropdown-menu').on('click', function(e) {
//       if($(this).hasClass('dropdown-menu-form')) {
//           e.stopPropagation();
//       }
//   });
// });





// MY PROFILE - VIEW & EDIT FUNCTION

// $(document).ready(function(){
//
// 	// edit button
// 	$(".edit-btn").click(function() {
// 		$(this).hide();
// 		var secID = $(this).closest(".section-editable").attr("id");
// 		$("#" + secID + " .close-btn").show();
// 		$("#" + secID + " .view-mode").hide();
// 		$("#" + secID + " .edit-mode").show();
// 	});
//
// 	// cancel button
// 	$(".close-btn").click(function() {
// 		var secID = $(this).closest(".section-editable").attr("id");
// 		$("#" + secID + " .edit-btn").show();
// 		$("#" + secID + " .close-btn").hide();
// 		$("#" + secID + " .view-mode").show();
// 		$("#" + secID + " .edit-mode").hide();
// 	});
//
// 	$(".list-group-item input[type=checkbox]").click(function(){
// 		$(this).closest("label").addClass("checked temp");
// 	});
// });


$(document).ready(function(){
	$(".toggle-btn").click(function() {

    var secEdit = $(this).data('edit-mode');
    var secView = $(this).data('view-mode');
    var secFooter = $(this).data('footer');
    var toggleBtn = $(this).find("span.fa");

    if(toggleBtn.is(".fa-pencil")) {
      toggleBtn.removeClass("fa-pencil");
      toggleBtn.addClass("fa-times");
      $(secEdit).show();
      $(secView).hide();
      $(secFooter).show();
    } else {
      toggleBtn.addClass("fa-pencil");
      toggleBtn.removeClass("fa-times");
      $(secEdit).hide();
      $(secView).show();
      $(secFooter).hide();
    }
	});
});
