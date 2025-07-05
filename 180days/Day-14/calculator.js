const result = document.getElementById("result");


const add = ()=>{

const num1= Number(document.getElementById('firstnum').value) ;
const num2 = Number(document.getElementById("secondnum").value) ;
  result.innerText = num1+num2;
}

const sub=()=>{
   const num1= Number(document.getElementById('firstnum').value) ;
   const num2 = Number(document.getElementById("secondnum").value) ;
   result.innerText= num1-num2;
}

const mul = ()=>{
   const num1= Number(document.getElementById('firstnum').value) ;
   const num2 = Number(document.getElementById("secondnum").value) ;
   result.innerText= num1*num2;
}

const div=()=>{
   const num1= Number(document.getElementById('firstnum').value) ;
   const num2 = Number(document.getElementById("secondnum").value) ;
    result.innerText= num1/num2;
}