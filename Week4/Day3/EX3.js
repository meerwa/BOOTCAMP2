const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert object to array
const userArray = Object.entries(users);
console.log(userArray);

// Modify IDs by multiplying by 2
const modifiedUserArray = userArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUserArray);



//OUTPUT
//Original: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
Modified: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]