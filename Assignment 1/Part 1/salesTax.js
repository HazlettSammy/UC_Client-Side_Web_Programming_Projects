// Function for user to input a number
function getValidNumber(promptMessage) {
    let value;
    do {
        value = parseFloat(prompt(promptMessage));
    } while (isNaN(value) || value < 0);  // Ensure the value is a valid number and not negative
    return value;
}

// Get item prices from the user
let item1 = getValidNumber("Enter the cost of Item 1:");
let item2 = getValidNumber("Enter the cost of Item 2:");

// Calculate total price
let totalPrice = item1 + item2;

// Calculate sales tax 8%
let salesTax = totalPrice * 0.08;

// Calculate total cost
let totalCost = totalPrice + salesTax;

// Format the numbers to 2 decimal places
item1 = item1.toFixed(2);
item2 = item2.toFixed(2);
totalPrice = totalPrice.toFixed(2);
salesTax = salesTax.toFixed(2);
totalCost = totalCost.toFixed(2);

// Display the total
alert(`Cost of Item 1: ${item1}\nCost of Item 2: ${item2}\nTotal price of two items: ${totalPrice}\n8% Sales tax = ${salesTax}\nTotal cost = ${totalCost}`);
