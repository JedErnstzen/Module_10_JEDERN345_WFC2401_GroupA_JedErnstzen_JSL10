// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Event listener for solving room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        // Fetch data from 'books.json'
        fetch('books.json') 
            // Parse the JSON response
            .then(response => response.json())
            // Process the retrieved data
            .then(books => {
                // Find the most recent book
                const mostRecentBook = findMostRecentBook(books);
                // Update the room result with the title of the most recent book
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Event listener for solving room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Initialize JavaScript and React concept sets
        const jsConcepts = new Set(['closure', 'scope', 'hoisting','async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Find the common concepts between JavaScript and React
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        // Update the room result with the common concepts
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });
    
    // Event listener for solving room 3
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        try {
            // Fetch data from 'directions.json'
            const response = await fetch('directions.json');
            // Parse the JSON response
            const directions = await response.json();
            // Navigate through the labyrinth asynchronously
            const message = await navigateLabyrinth(directions);
            // Update the room result with the completion message
            document.getElementById("room3Result").textContent = message;
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            // Display an error message to the user or handle the error appropriately
        }
    });
});

// Function to find the most recent book among the provided list of books
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => {
        const mostRecentDate = new Date(mostRecent.published);
        const currentDate = new Date(book.published);
        // Compare publication dates to find the most recent book
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
        // Log the current direction
        console.log(`Navigating: ${direction.step}`);
        // Add a delay of 1 second before navigating to the next step
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    // Return the completion message
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
