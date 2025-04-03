// Define the Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;     // Title of the video
        this.uploader = uploader; // Who uploaded the video
        this.time = time;       // Duration of the video in seconds
    }

    // Method to display a message when the video is watched
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// Creating the first Video instance
const video1 = new Video("JavaScript Basics", "Alice", 300);
video1.watch(); // Output: Alice watched all 300 seconds of JavaScript Basics!

// Creating the second Video instance
const video2 = new Video("Advanced JavaScript", "Bob", 600);
video2.watch(); // Output: Bob watched all 600 seconds of Advanced JavaScript!

// Bonus: Store video data in an array
const videoData = [
    { title: "JavaScript Basics", uploader: "Alice", time: 300 },
    { title: "Advanced JavaScript", uploader: "Bob", time: 600 },
    { title: "JavaScript OOP", uploader: "Charlie", time: 450 },
    { title: "Asynchronous JS", uploader: "David", time: 500 },
    { title: "JavaScript ES6+ Features", uploader: "Eva", time: 400 }
];

// Loop through the array to create Video instances
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

// Calling the watch method for each video
videos.forEach(video => video.watch());