// Create an array of books
const allBooks = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "https://example.com/harry_potter.jpg", // Placeholder URL
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://example.com/hobbit.jpg", // Placeholder URL
        alreadyRead: false
    }
];

// Select the section to display books
const listBooksSection = document.querySelector(".listBooks");

// Render each book
allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    
    // Create book details
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    // Set color based on whether the book is already read
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
    
    // Create image element
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px"; // Set the image width
    
    // Append the image and details to the bookDiv
    bookDiv.appendChild(img);
    bookDiv.appendChild(bookDetails);
    
    // Append the bookDiv to the section
    listBooksSection.appendChild(bookDiv);
});