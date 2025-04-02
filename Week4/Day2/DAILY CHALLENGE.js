const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  // Step 1: Create an array of usernames with an exclamation mark
  const usernames = [];
  gameInfo.forEach(player => {
    usernames.push(`${player.username}!`);
  });
  console.log(usernames); // Output: ["john!", "becky!", "susy!", "tyson!"]
  
  // Step 2: Create an array of winners (username with score greater than 5)
  const winners = [];
  gameInfo.forEach(player => {
    if (player.score > 5) {
      winners.push(player.username);
    }
  });
  console.log(winners); // Output: ["becky", "susy"]
  
  // Step 3: Calculate the total score of all users
  const totalScore = gameInfo.reduce((accumulator, player) => accumulator + player.score, 0);
  console.log("Total score:", totalScore); // Output: Total score: 71