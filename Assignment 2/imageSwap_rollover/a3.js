// FUNCTIONS
const $ = function (id) { 
	return document.getElementById(id); 
}
let centerImage = null;

// Change the image on mouseover
const rollover = function() {
	const a = this; // link that was hovered over
	const newSrc = a.getAttribute("href").replace("1", "2"); // Change to the second image
	centerImage.setAttribute("src", newSrc);
	centerImage.setAttribute("id", a.getAttribute("id").replace("1", "2")); // Update ID if needed
}

// revert the image on mouseout
const mouseOut = function() {
	const a = this; // link that was hovered over
	const originalSrc = a.getAttribute("href"); // original image source
	centerImage.setAttribute("src", originalSrc); // Reset to the original image
	centerImage.setAttribute("id", a.getAttribute("id")); // Reset ID if needed
}

// Image swap when a thumbnail is clicked
const swap = function(evt){
	const a = this; 
	const caption = $("caption");
	centerImage.setAttribute("src", a.getAttribute("href"));
	centerImage.setAttribute("id", a.getAttribute("id"));
	caption.firstChild.nodeValue = a.getAttribute("title");	
	evt.preventDefault();          	
}

// Onload event handler		
window.onload = function () {
	const listNode = $("image_list");
	const aElements = listNode.getElementsByTagName("a");
	centerImage = $("enlargedImage");
	
	// process for each image link
	let imageLink = null;
	for (let i = 0; i < aElements.length; i++) {
		imageLink = aElements[i];
		const image = new Image();
		image.setAttribute("src", imageLink.getAttribute("href"));
		image.setAttribute("id", imageLink.getAttribute("id"));
		imageLink.onclick = swap;

		// mouseover and mouseout for rollover effect
		imageLink.onmouseover = rollover;
		imageLink.onmouseout = mouseOut;
	}
}
