import React from 'react'
import './DestinationsStyles.css'

import Summer1 from '../../assets/summer1.jpg'
import Summer2 from '../../assets/summer2.jpg'
import Summer3 from '../../assets/summer3.jpg'
import Summer4 from '../../assets/summer4.jpg'
import Summer5 from '../../assets/summer5.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Tours</h1>
                <p>Tours with the best views in the world</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Summer1} alt="/"/>
                    <img src={Summer2} alt="/"/>
                    <img src={Summer3} alt="/"/>
                    <img src={Summer4} alt="/"/>
                    <img src={Summer5} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations