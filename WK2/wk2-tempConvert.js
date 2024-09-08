function convertFahrenheitToCelsius() {
    for (let i = 0; i < 4; i++) { // Repeat the program four times
        let fahrenheit;
        let validInput = false;

        // Keep prompting until the user inputs a valid number
        while (!validInput) {
            fahrenheit = prompt("Enter temperature in Fahrenheit (Attempt " + (i + 1) + " of 4):");

            // Check if the input is a number and allow negative numbers
            if (fahrenheit === null) {
                alert("No input provided. Exiting.");
                return; // Exit if the user cancels the input
            } else if (isNaN(fahrenheit)) {
                alert("Please type a valid number.");
            } else {
                validInput = true;
            }
        }

        // Convert the input to a number (valid after while loop)
        fahrenheit = parseFloat(fahrenheit);

        // Convert to Celsius using the formula
        let celsius = (fahrenheit - 32) * (5 / 9);

        // Display the result
        alert(fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.");
    }
}

// Execute the function when the page loads
window.onload = convertFahrenheitToCelsius;
