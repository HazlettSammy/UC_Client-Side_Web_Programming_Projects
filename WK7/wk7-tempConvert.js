// Temperature Conversion in jQuery
const convertTemperature = function() {
    console.log("Temperature conversion initiated");

    let temperature = parseFloat($("#temp").val());
    let inputIsValid = true;

    // input
    if (isNaN(temperature)) {
        console.log("Invalid temperature input");
        inputIsValid = false;
        $("#error_temp").text("Please enter a valid number");
    } else {
        $("#error_temp").text("*");
        let celsiusTemperature = (temperature - 32) * 5 / 9;
        $("#answer").val(celsiusTemperature.toFixed(2)); // Limited decimal places
    }
};

// Clear input with jQuery
const resetFields = function() {
    console.log("Reset fields initiated");

    // Reset the input, also error message
    $("#temp").val("");
    $("#answer").val("");
    $("#error_temp").text("*");
};


$(document).ready(function() {
    console.log("Page has fully loaded");

    // Attach button event handlers using jQuery
    $("#execute").click(convertTemperature);
    $("#clear").click(resetFields);
});
