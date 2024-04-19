document.addEventListener("DOMContentLoaded", () => {
    // This block of code handles the button click event for solving room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        // Fetching the data from the 'books.json' file
        fetch('books.json') 
            // Parsing the JSON response
            .then(response => response.json())
            // Processing the retrieved data
            .then(books => {
                // Finding the most recent book from the retrieved list
                const mostRecentBook = findMostRecentBook(books);
                // Updating the room result with the title of the most recent book
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // This block of code handles the button click event for solving room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Initializing JavaScript and React concept sets
        const jsConcepts = new Set(['closure', 'scope', 'hoisting','async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Finding the common concepts between JavaScript and React
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        // Updating the room result with the common concepts
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });
    
    // This block of code handles the button click event for solving room 3
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        try {
            // Fetching the data from the 'directions.json' file
            const response = await fetch('directions.json');
            // Parsing the JSON response
            const directions = await response.json();
            // Navigating through the labyrinth asynchronously
            const message = await navigateLabyrinth(directions);
            // Updating the room result with the completion message
            document.getElementById("room3Result").textContent = message;
        } catch (error) {
            console.error('Error:', error);
            // Handle the error appropriately (e.g., display an error message to the user)
        }
    });
});

// Function to find the most recent book among the provided list of books
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => {
        const mostRecentDate = new Date(mostRecent.published);
        const currentDate = new Date(book.published);
        // Comparing publication dates to find the most recent book
        return currentDate > mostRecentDate ? book : mostRecent;
    });
}

// Function to find the intersection between two sets
function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}

// Function to navigate through the labyrinth asynchronously
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // Logging the current direction
        console.log(`Navigating: ${direction.step}`);
        // Adding a delay of 1 second before navigating to the next step
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    // Returning the completion message
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
