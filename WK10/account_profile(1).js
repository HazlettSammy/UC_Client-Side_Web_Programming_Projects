"use strict"; // Enable strict mode for better error checking.

const isDate = (date, datePattern) => { // Function to validate the date format.
    if (!datePattern.test(date)) { return false; } // Check if the date matches the pattern.

    const dateParts = date.split("/"); // Split the date into month and day.
    const month = parseInt(dateParts[0]); // Get the month as an integer.
    const day = parseInt(dateParts[1]); // Get the day as an integer.

    if (month < 1 || month > 12) { return false; } // Validate month range.
    if (day > 31) { return false; } // Validate day.
    return true; // Return true if the date is valid.
};

$(document).ready(() => { // Execute when the DOM is fully loaded.

    $("#save").click(() => { // On clicking the save button.
        $("span").text(""); // Clear previous error messages.

        // Get user input values.
        const email = $("#email").val(); 
        const phone = $("#phone").val(); 
        const zip = $("#zip").val(); 
        const dob = $("#dob").val(); 

        // Regular expressions for input validation.
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/; 
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/; 
        const zipPattern = /^\d{5}(-\d{4})?$/; 
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/; 
        
        let isValid = true; // Flag to track form validity.
        
        // Validate email.
        if (email === "" || !emailPattern.test(email)) { 
            isValid = false; 
            $("#email").next().text("Please enter a valid email."); // Show error message.
        }
        
        // Validate phone.
        if (phone === "" || !phonePattern.test(phone)) { 
            isValid = false; 
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format."); 
        }
        
        // Validate zip code.
        if (zip === "" || !zipPattern.test(zip)) { 
            isValid = false; 
            $("#zip").next().text("Please enter a valid zip code."); 
        }
        
        // Validate date of birth.
        if (dob === "" || !isDate(dob, datePattern)) { 
            isValid = false; 
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format."); 
        }
        
        if (isValid) { 
            // Code to save user profile info would go here.
        }
        
        $("#email").focus(); // Set focus to the email field after validation.
    });
    
    $("#email").focus(); // Initial focus on the email input when the page loads.
});
