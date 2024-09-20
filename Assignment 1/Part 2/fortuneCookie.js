// List of fortunes
const fortunes = [
    "You will have a great day!",
    "A surprise is waiting for you.",
    "Challenges are opportunities in disguise.",
    "They know what you did back in 1987.",
    "Good news will come your way soon."
];

// Function to get valid user input
function getFortuneNumber() {
    let number;
    do {
        number = parseInt(prompt("Enter a number between 1 and 5 (or 0 to exit):"));
    } while (isNaN(number) || number < 0 || number > 5);  // Ensure valid input
    return number;
}

let userNumber;
do {
    userNumber = getFortuneNumber();

    // Exit when the user enters 0
    if (userNumber === 0) {
        alert("Goodbye!");
        break;
    }

    // Display the fortune
    alert(fortunes[userNumber - 1]);

} while (userNumber !== 0);
