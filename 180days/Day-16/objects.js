

const intro={
    name:"Asia Ahmad Ali",
    uni:"PUCIT",
    degree:"BSIT",
    campus:"New Campus",
    hobbies:["TedX Speeches", "Shark tank","watch cricket"],
    // function added
    ambitions:()=>{
        console.log("to be a good enginner to solve real world problem of businesses")
    },
    // nested object 
    contactDetails:{
        email:"asiaahmadali17@gmail.com",
        linkedin:"https://www.linkedin.com/in/asiaahmadali",
    },
    skills:{
        Frontend:"html, css, js, tailwind css, react js,firebase ",
        Backend:"node js, express js, jwt authentication", // i am still learning backend
        database:"SQL, Mongodb"
    }
}

// modify object using dot noattion
intro.uni = "punjab university PUCIT"

console.log(intro);
console.log(intro.name);
console.log(intro["uni"]);   // bracket notation
console.log(intro.hobbies);
console.log(intro.ambitions);


console.log(intro.contactDetails.email);
console.log(intro.hobbies[2]);
console.log(intro.skills["Backend"]) // bracket notation