import React from 'react'
import { finalRating } from './Rating'
import './App.css'
import PhoneImage from './PhoneImage'


function Thanks() {
    return (
        <div className='Thanks'>
            <PhoneImage />
            <div className='orange-result'>
            <h3 className='result'>You selected {finalRating} out of 5</h3>
            </div>
            <h1>Thank you!</h1>

            <h2>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </h2>
        </div>
    )
}

export default Thanks