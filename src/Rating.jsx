
import React from 'react'
import './App.css'
import IconStar from './IconStar';
export let finalRating;


function Rating(props) {

  const rating = [];
  function changeRating(id) {
    rating.push(id)
    const lastRating = rating.slice(-1)
    finalRating = lastRating.slice(-1)
  }

  return (
    <div className='Rating'>
      <rating>
        <div className="IconStar">
          <IconStar />
        </div>
        <div className='how'>
        <h1>How did we do?</h1>
        </div>

        <h2>
          Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!
        </h2>
        <div className='numbers'>
          {/* button on hover; turn light gray and when selected turn orange */}
          <button className='styled-numbers' id='1' onClick={() => changeRating(1)}>1</button>
          <button className='styled-numbers' id='2' onClick={() => changeRating(2)}>2</button>
          <button className='styled-numbers' id='3' onClick={() => changeRating(3)}>3</button>
          <button className='styled-numbers' id='4' onClick={() => changeRating(4)}>4</button>
          <button className='styled-numbers' id='5' onClick={() => changeRating(5)}>5</button>
        </div>

        <br></br>

        <button className='submit-button' onClick={() => props.changeState(true)}>SUBMIT</button>


      </rating>
    </div>
  )
}

export default Rating