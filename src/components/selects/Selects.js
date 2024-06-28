import React from 'react'
import './SelectsStyles.css'

import Summer1 from '../../assets/summer1.jpg'
import Summer2 from '../../assets/summer2.jpg'
import Summer3 from '../../assets/summer3.jpg'
import Summer4 from '../../assets/summer4.jpg'
import Summer5 from '../../assets/summer5.jpg'
import Summer6 from '../../assets/summer6.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Summer1} text='Paris' />
                <SelectsImg bgImg={Summer2} text='Turkey' />
                <SelectsImg bgImg={Summer3} text='London' />
                <SelectsImg bgImg={Summer4} text='India' />
                <SelectsImg bgImg={Summer5} text='Netherlands' />
                <SelectsImg bgImg={Summer6} text='UAE' />
            </div>

        </div>
    )
}

export default Selects