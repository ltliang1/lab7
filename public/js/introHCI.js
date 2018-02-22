'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

    $("button.likeBtn").click(clickLike);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function clickLike() {
    console.log("clicked on like");
    ga("send", "event", "like", "click");
}