import Thanks from './Thanks';
import Rating from './Rating';
import './App.css';
import { useState } from 'react';

function App() { 
  const [isSubmit, setIsSubmit] = useState(null);

  if (!isSubmit){

    return(
      <div className='App'>

    
    <h1>{isSubmit}</h1>
   <Rating changeState={isSubmit => setIsSubmit(isSubmit)}/>
    </div>
  )
}

if (isSubmit){
  return(
    <div className='App'>

    <Thanks />
    </div>
  )
}
}

export default App;
// use app.css to define card styles for noth thanks and rating
