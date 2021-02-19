'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(btnClick);
}


function btnClick(e) {
	// prevent the page from reloading     
	e.preventDefault();

	console.log("like button click");
	
	ga("send", "event", "like", "click");
}
