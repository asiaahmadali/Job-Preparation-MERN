

let games = ["cricket", "football", "hockey"];
console.log(games);
console.log(games[0])
console.log(games[games.length-1])


// push
games.push(20)
console.log(games)
games.push("tennis");
games.push(90)
console.log(games)

// pop

games.pop();
console.log(games);
games.pop();
console.log(games);

// find indeces of elements in arrays
console.log(Object.keys(games));

// get undefined on out of bound index
console.log(games[9])

// sort
games.sort();
console.log(games);


// slice   it do not change origional one like  

const slicedgamesArray=games.slice(2, 3);
console.log(slicedgamesArray);
// now i am going to chenck the origional array
console.log(games);


// splice    , ye origionl array ko change kr dy ga
games.splice(2, 1) // 2 se start kr k 1 element deleter krr dyy
// now check the origional array
console.log(games)

// reverse the array
console.log(games.reverse())

// foreach method

games.forEach((gameitem)=>{
   console.log(gameitem)
})