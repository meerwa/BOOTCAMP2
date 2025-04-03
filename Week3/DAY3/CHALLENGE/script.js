// Define an array of planet objects
const planets = [
    { name: "Mercury", color: "gray", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { name: "Saturn", color: "gold", moons: ["Titan", "Rhea", "Enceladus"] },
    { name: "Uranus", color: "lightblue", moons: ["Titania", "Oberon"] },
    { name: "Neptune", color: "blueviolet", moons: ["Triton"] }
];

// Get the section where planets will be displayed
const section = document.querySelector('.listPlanets');

// Create each planet and its moons
planets.forEach(planet => {
    // Create a div for the planet
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // Append the planet div to the section
    section.appendChild(planetDiv);

    // Create moons if there are any
    if (planet.moons.length > 0) {
        planet.moons.forEach(moon => {
            // Create a div for the moon
            const moonDiv = document.createElement('div');
            moonDiv.className = 'moon';
            
            // Set a random position for the moons around the planet
            const x = Math.random() * 70; // Random x position
            const y = Math.random() * 70; // Random y position
            
            moonDiv.style.left = `${x}px`;
            moonDiv.style.top = `${y}px`;
            moonDiv.textContent = moon; // Optionally, add moon's name

            // Append the moon div to the planet div
            planetDiv.appendChild(moonDiv);
        });
    }
});