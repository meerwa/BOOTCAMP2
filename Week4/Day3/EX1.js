const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

// Destructuring
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// Logging the result
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//OUTPUT
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)