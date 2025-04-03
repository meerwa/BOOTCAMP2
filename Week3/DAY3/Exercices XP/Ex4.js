function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
        nights = parseInt(nights);
    } while (isNaN(nights) || nights <= 0);

    return nights * 140; // Cost per night
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Please enter your destination").toLowerCase();
    } while (!destination || typeof destination !== 'string');

    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days would you like to rent the car?");
        days = parseInt(days);
    } while (isNaN(days) || days <= 0);
    
    let cost = days * 40; // $40 per day
    if (days > 10) cost *= 0.95; // 5% discount for more than 10 days
    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
}

// Call the function
totalVacationCost();