$(document).ready(() => {
    const displayData = data => {
        // Use console to display data in the Chrome debugger
        console.log(data);

        // Clear previous results
        $("#itunes").html("");

        // Loop through all 10 songs in the data feed
        data.feed.entry.forEach(song => {
            const artistName = song["im:artist"].label;
            const albumName = song["im:name"].label;
            const link = song.id.label;
            const price = song["im:price"].label; // Get the price of the song
            const imageUrl = song["im:image"][2].label; // Get the largest image

            // Append the details of the song to the #itunes div
            $("#itunes").append(`
                <div class="song">
                    <img src="${imageUrl}" alt="Album Art">
                    <p><strong>Artist:</strong> ${artistName}</p>
                    <p><strong>Album:</strong> ${albumName}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <a href="${link}" target="_blank">Link to Album</a>
                </div>
                <hr>
            `);
        });
    };

    const displayBooks = data => {
        // Clear previous results
        $("#itunes").html("");

        // Loop through all books in the JSON file
        data.books.forEach(book => {
            const { title, author, price, image } = book;

            // Append the details of the book to the #itunes div
            $("#itunes").append(`
                <div class="book">
                    <img src="${image}" alt="Book Cover">
                    <p><strong>Title:</strong> ${title}</p>
                    <p><strong>Author:</strong> ${author}</p>
                    <p><strong>Price:</strong> ${price}</p>
                </div>
                <hr>
            `);
        });
    };

    const displayError = error => {
        $("#itunes").html("<span class='error'>" + error.message + "</span>");
    };

    $("#btnSearch").click(() => {
        // Reset the div element in case a second search is made
        $("#itunes").html("");

        // Set the search term
        let countryCode = "";

        if ($("#search").val().trim() !== "") {
            countryCode = $("#search").val().trim();

            // Build URL for API request
            const url = `https://itunes.apple.com/${countryCode}/rss/topsongs/limit=10/json`;

            // Fetch data from the URL
            fetch(url)
                .then(response => response.json()) // Get the response data from the URL
                .then(json => displayData(json)) // Send the response data to the displayData function
                .catch(e => displayError(e)); // Handle errors
        } else {
            // If no country code is provided, load books.json
            fetch("books.json")
                .then(response => response.json())
                .then(json => displayBooks(json))
                .catch(e => displayError(e));
        }
    }); // End click
}); // End ready
