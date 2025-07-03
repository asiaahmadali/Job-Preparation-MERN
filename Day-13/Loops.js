// Exploring loops in javascript

// for loop


for(let i=0 ; i<10 ; i++){
    if(i==3)continue;
    console.log("Revising concepts of javascript "+i);
    if(i==6)break;
}

// for of loop
const games=["cricket", "football","hockey", "tennis"];

for(game of games){
    console.log(game);
}

//for in loop (it is used to get the values and key as well)

const univerities=["PU", "UET","NUST", "FAST"];

for(key in univerities){
    console.log(key+"  "+univerities[key]);
}

// while loop

let i=0 ;
while(i<5){
    console.log(i);
    i++;
}

// do while loop(atleast runs once)

let k=0 ;
do{
  console.log(k);
    i++;
}
while(i<5)

// for each loop(higher order array function)
const courses=["web","mobile","AI/ML","security"];

courses.forEach((course)=>{
   console.log(course)
})
