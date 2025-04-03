// Assuming the HTML structure is present
const container = document.getElementById('container');
console.log(container);

// Change "Pete" to "Richard"
const lists = document.querySelectorAll('ul.list');
lists.forEach(list => {
    const items = list.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent === "Pete") {
            item.textContent = "Richard";
        }
        if (item.textContent === "Dan") {
            item.remove(); // Delete the second <li> of the second <ul>
        }
    });
});

// Change the name of the first <li> to your name
lists.forEach(list => {
    const firstItem = list.firstElementChild;
    firstItem.textContent = "YourName"; // Replace with your name
});

// Add classes
lists[0].class