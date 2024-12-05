// Arrays for names and scores
var studentNames = ["Ben", "Joel", "Judy", "Anne"];
var studentScores = [77, 88, 98, 80];

// A function to get an element by its ID
function getElementById(id) {
    return document.getElementById(id);
}

// Add a new score to the arrays
function addStudentScore() {
    // Get the name and score entered by the user
    var name = getElementById("name").value;  // Get the name input
    var score = parseInt(getElementById("score").value); // Get the score input

    // Validate the input
    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("Please enter a valid name and score between 0 and 100."); 
    } else {
        // Add the name and score 
        studentNames.push(name);
        studentScores.push(score);

        // Clear the text area after adding the score
        getElementById("display").value = ""; // Clear the textarea

        // Clear the input fields for better usability
        getElementById("name").value = ""; // Clear the name input
        getElementById("score").value = ""; // Clear the score input
    }
    getElementById("name").focus(); // Focus on the name input for convenience
}

// Display all names and scores
function displayAllScores() {
    var displayArea = getElementById("display");
    displayArea.value = ""; // Clear previous display text

    // Check if there are any scores to display
    if (studentNames.length === 0) {
        displayArea.value = "No scores available."; // Message if no scores
        return;
    }

    // Loop through arrays and show each name with the corresponding score
    for (var i = 0; i < studentNames.length; i++) {
        displayArea.value += (i + 1) + ". " + studentNames[i] + ": " + studentScores[i] + "\n"; // Format output
    }
}

// Calculate and show the average score
function calculateAverageScore() {
    if (studentScores.length === 0) {
        getElementById("results").innerHTML = "No scores available to calculate the average."; // Message if no scores
        return;
    }

    // Loop to calculate total score 
    var totalScore = 0; // Initialize total score variable
    for (var i = 0; i < studentScores.length; i++) {
        totalScore += studentScores[i]; // Add each score to total
    }

    // Calculating the average score
    var averageScore = totalScore / studentScores.length;
    getElementById("results").innerHTML = "Average Score: " + averageScore.toFixed(2); // Display average score
}

// Event handlers when the page loads
window.onload = function() {
    getElementById("add").onclick = addStudentScore; // Handle add score
    getElementById("display_scores").onclick = displayAllScores; // Handle display scores
    getElementById("calculate_average").onclick = calculateAverageScore; // Handle calculate average
};
