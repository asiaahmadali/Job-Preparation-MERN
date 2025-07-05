
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  // getting jokes data from backend

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
  })
  
  return (
    <>
      
     <div>
         <h1>Total jokes are : {jokes.length}</h1>
         {
          jokes.map((joke)=>{
               return <div key={joke.id}>
                   <p>{joke.content}</p>
               </div>
          })
         }
     </div>
    </>
  )
}

export default App
