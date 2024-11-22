const toggle = evt => {
    
    /*** 3. Added code to animate the fontSize of h2 text when 
           the content in div was displayed.
           Also animated it back to its original size when the 
           content of div was hidden.
    ***/
    
    /*** 4. Added code to make the image disappear after hiding 
            the book list (or any of the lists).
    ***/
    
    // currentTarget = the clicked h2 tag
    const h2 = $(evt.currentTarget);
    // the div sibling right next to the clicked h2
    const div = h2.next();
    // toggled the class by adding 
    // and removing the class attribute of the clicked h2 tag
    h2.toggleClass("minus");    
    
    // if the clicked h2 attribute was set to minus
    // displayed the div section and animated the font size increase
    if (h2.attr("class") == "minus") {
        div.show(); // displayed the content div
        h2.animate(
            {
                fontSize: "275%",  // Increased font size when div was shown
                opacity: 1,        // Ensured it was fully opaque
                left: 0            // No horizontal shift applied here
            }, 2000                // Animation duration of 2 seconds
        );  
    }
    // else hid the div section and animated the font size decrease
    else {
        div.hide(); // hid the content div
        h2.animate(
            {
                fontSize: "120%",  // Reverted font size to original when div was hidden
                opacity: 1,        // Kept opacity at 1
                left: 0            // No horizontal shift applied here
            }, 2000                // Animation duration of 2 seconds
        ); 
        $("#image").attr("src", ""); // Cleared the image src to hide it
    }
}

const changePic = evt => {
    /*** 1. Added code to display/change picture as the links 
           (<a> tags) were clicked. ***/
    const a_clicked = $(evt.currentTarget); // Got the clicked link element
    let y = a_clicked.attr("href");         // Got the href attribute (image URL) of clicked link
    $("#image").attr("src", y);             // Set the src attribute of the image to show the new image
    evt.preventDefault();                   // Prevented default link behavior to avoid page reload
}

$(document).ready(() => {
    
    // H2 TAG PROCESSING
    const h2Elements = $("#categories h2"); // Selected all h2 elements inside the #categories div
    h2Elements.click(toggle);               // Bound the toggle function to h2 click events
    
    /*** 2. Added code to change all h2 text color 
           when the mouse entered or left the h2 tags. ***/    
    
    h2Elements.mouseenter(evt => {
        $(evt.currentTarget).css({
            "color": "green",    // Changed color to green on mouse enter
            "opacity": "1"       // Ensured full opacity
        });
    });
    
    h2Elements.mouseout(evt => {
        $(evt.currentTarget).css({
            "color": "blue",     // Changed color back to blue on mouse out
            "opacity": "1"       // Ensured full opacity
        });
    });

    // A TAG PROCESSING
    const aElements = $("#categories a"); // Selected all <a> tags inside the #categories div
    
    // PRE-LOADED IMAGES FROM THE A TAGS
    aElements.each((i, item) => {
        const image = new Image();                 // Created a new Image object
        image.src = $(item).attr("href");          // Set the src to the href of the link (preloaded)
    }); // end for each

    aElements.click(changePic); // Bound changePic function to each link click event

}); // end ready
