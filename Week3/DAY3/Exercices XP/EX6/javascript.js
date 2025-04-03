// Change the id attribute
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// Create a new <li> for "Logout"
const newLi = document.createElement("li");
const newText = document.createTextNode("Logout");
newLi.appendChild(newText);

// Append the new <li> to the <ul>
const ul = navBar.querySelector("ul");
ul.appendChild(newLi);

// Retrieve the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of each link
console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);