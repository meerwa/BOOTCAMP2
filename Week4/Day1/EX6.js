// Self-invoking function for fortune teller
((children, partner, location, job) => {
    // Construct the message
    const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    
    // Display the message in the DOM
    document.body.innerHTML += `<p>${message}</p>`;
})(3, 'Alice', 'New York', 'Developer');