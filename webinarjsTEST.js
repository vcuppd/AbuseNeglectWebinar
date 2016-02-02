$(document).ready( function() {
	// var video = document.getElementById("video");
	var button = $('<a class="btn btn-info btn-block btn-lg" href="session01quiz.html" role="button">Session 1 Quiz</a>');

	// Works with Chrome
	// video.onended = function() {
 //    	button.appendTo($('#quizButton')).fadeIn(3000);
 //    	return false;
	// };

	document.getElementById('video').addEventListener('ended',myHandler,false);
	
    function myHandler(e) {
       // What you want to do after the event
 		// button.appendTo($('#quizButton')).fadeIn(3000);
 		console.log("ended");
    }
	
});
