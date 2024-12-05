// List of Items and Prices for Items
const items = ["Biscotti", "Cappuccino", "Coffee", "Espresso", "Latte", "Scone"];
const price = [1.95, 3.45, 1.75, 1.95, 2.95, 2.95];
let selected_items = [];

$(document).ready(() => {
    // Rollover images: This block preloads the images for the items
    items.forEach((item) => {
        const image = new Image();
        image.src = `images/${item.toLowerCase()}_info.jpg`;
    });

    // Description & Price when hover over items: Shows price when hovering over an item image
    $("#menu img").hover(
        function () {
            const id = $(this).attr("id");
            const index = items.findIndex(item => id.includes(item.toLowerCase()));
            if (index !== -1) {
                // Changes the image source to display the item info
                $(this).attr("src", `images/${items[index].toLowerCase()}_info.jpg`);
                // Displays the price of the item
                $(this).after(`<p class="info">Price: $${price[index].toFixed(2)}</p>`);
            }
        },
        function () {
            const id = $(this).attr("id");
            $(this).attr("src", id);  // Reverts back to the original image
            $(".info").remove();  // Removes the price display when hover ends
        }
    );

    // Add items to order list on click: Adds the selected item to the order list
    $("#menu img").click(function () {
        const id = $(this).attr("id");
        const index = items.findIndex(item => id.includes(item.toLowerCase()));
        if (index !== -1) {
            selected_items.push(items[index]);  // Adds item to the selected items array
            // Adds the item and its price to the order list in the form
            $("#order").append(
                `<option>${items[index]} - $${price[index].toFixed(2)}</option>`
            );
            updateTotal();  // Updates the total price
        }
    });

    // Place order: Submits the form when the "Place Order" button is clicked
    $("#place_order").click(() => {
        if (selected_items.length === 0) {
            alert("Your order is empty. Please add items to your order.");
        } else {
            $("#order_form").submit();  // Submits the form
        }
    });

    // Clear order: Clears the selected items and resets the order list
    $("#clear_order").click(() => {
        selected_items = [];  // Clears the selected items array
        $("#order").empty();  // Clears the order list in the form
        updateTotal();  // Updates the total to reflect the cleared order
    });

    // Total price: Calculates and displays the total price of the order
    const updateTotal = () => {
        const total = selected_items.reduce(
            (sum, item) => sum + price[items.indexOf(item)],  // Sums up the prices of selected items
            0
        );
        // Updates the total price displayed on the page
        $("#total").text(`Total: $${total.toFixed(2)}`);
    };
});
