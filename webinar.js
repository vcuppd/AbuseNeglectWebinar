$(document).ready(function () {
	$('#save').click(function(e)){
		$.ajax({
			type: "POST",
			url: "register02.php",
			data: dataString,
				  
		     success: function() {
      			$('.title').html("");
        			$('#message').html("✓ Logged!")
        			.hide()
       				 
       			.fadeIn(1500, function() {
         			 $('#message').append("");
         			 });
         			}
			});
			return false;
				  
		});
});