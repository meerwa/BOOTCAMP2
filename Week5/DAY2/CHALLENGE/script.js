const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gif-form');
const gifArea = document.getElementById('gif-area');
const deleteAllButton = document.getElementById('delete-all');

// Function to fetch a random gif based on the category
async function fetchRandomGif(category) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.data.length === 0) {
            console.log("No gifs found for this category.");
            return;
        }
        
        const gifUrl = data.data.images.original.url; // Get the gif URL
        appendGif(gifUrl);
    } catch (error) {
        console.error('Error fetching the GIF:', error);
    }
}

// Function to append gif to the page
function appendGif(url) {
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');

    const gifImage = document.createElement('img');
    gifImage.src = url;
    gifImage.alt = 'Random Gif';
    gifImage.classList.add('gif');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => {
        gifArea.removeChild(gifContainer);
    };

    gifContainer.appendChild(gifImage);
    gifContainer.appendChild(deleteButton);
    gifArea.appendChild(gifContainer);
}

// Event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const categoryInput = document.getElementById('category');
    const category = categoryInput.value;
    fetchRandomGif(category);
    categoryInput.value = ''; // Clear the input
});

// Event listener for the delete all button
deleteAllButton.addEventListener('click', function() {
    gifArea.innerHTML = ''; // Clear all gifs
});