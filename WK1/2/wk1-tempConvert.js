function convertFahrenheitToCelsius() {
    // Prompt the user for Fahrenheit temperature
    var fahrenheit = prompt("Enter temperature in Fahrenheit:");

    // Check if the input is a number
    if (isNaN(fahrenheit)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert the input to a number
    fahrenheit = parseFloat(fahrenheit);

    // Calculate Celsius
    var celsius = (fahrenheit - 32) * (5 / 9);

    // Display the result
    alert(fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.");
}

// Execute the function when the page loads
window.onload = convertFahrenheitToCelsius;
