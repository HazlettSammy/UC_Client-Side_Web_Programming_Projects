// Get element by ID
const getElement = function(elementId) {
    console.log(`getElement function called for: ${elementId}`);
    return document.getElementById(elementId);
};

// Perform Temperature Conversion
const convertTemperature = function() {
    console.log("Temperature conversion initiated");

    let temperature = parseFloat(getElement("temp").value);
    let inputIsValid = true;

    // Validate input
    if (isNaN(temperature)) {
        console.log("Invalid temperature input");
        inputIsValid = false;
        getElement("error_temp").textContent = "Please enter a valid number";
    } else {
        inputIsValid = true;
        getElement("error_temp").textContent = "*";
        let celsiusTemperature = (temperature - 32) * 5 / 9;
        getElement("answer").value = celsiusTemperature.toFixed(2); // Limit decimal places
    }
};

// Clear input fields
const resetFields = function() {
    console.log("Reset fields initiated");

    // Reset the input fields
    getElement("temp").value = "";
    getElement("answer").value = "";
    getElement("error_temp").textContent = "*";
};

// Event handlers after page load
window.addEventListener('load', function() {
    console.log("Page has fully loaded");

    // Attach button event handlers
    getElement("execute").addEventListener('click', convertTemperature);
    getElement("clear").addEventListener('click', resetFields);
});
