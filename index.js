let users = new Array(4); //Indices 0,1,2,3

//Loop through the array, adding a new array to each location

for (let i = 0; i <users.length; i++) {
    users[i] = new Array(4); //new array of 4 locations 
}

//Put items in a 2D array 

users[0][0] = 'John';
users[0][1] = 'Age: 12-15';
users[0][2] = 'Likes1';
users[0][3] = "Dislikes1"; 
users[1][0] = "Name2"; 
users[1][1] = "Age2"; 
users[1][2] = "Likes2";
users[1][3] = "Dislikes2";
users[2][0] = "Name3"; 
users[2][1] = "Age3";
users[2][2] = "Likes3"; 
users[2][3] = "Dislikes3"; 
users[3][0] = "Name4"; 
users[3][1] = "Age4"; 
users[3][2] = "Likes4"; 
users[3][3] = "Dislikes4"; 

//Choose random array 
console.log(users[Math.floor(Math.random() * users.length)]);