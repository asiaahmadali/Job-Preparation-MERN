
// arrow function
const intro=()=>{
    console.log("my name is Asia Ahmad Ali")
}

intro();

// get some of marks

const totalmarks=(marks)=>{
  let total = 0;
  for(let i=0; i<marks.length ; i++){
    total=total+marks[i];
  }
  return total ;
}

const marks=[90,80,90,100];
console.log(totalmarks(marks));