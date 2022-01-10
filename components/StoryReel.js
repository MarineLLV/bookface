import React from 'react'
import Story from './Story'
import army from '../../public/army.jpg'
import supreme from '../../public/supreme.jpg'
import family from '../../public/family.jpg'
import america from '../../public/america.jpg'
import seat from '../../public/seat.jpg'
import old from '../../public/old.jpg'
import man from '../../public/man.jpg'
import fishing from '../../public/fishing.jpg'
import './StoryReel.module.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image={family}
                profileSrc={army}
                title='Vielle croûte'
            />    
            <Story
                image={america}
                profileSrc={supreme}
                title='Vieux chnok'
            />  

            <Story
                image={seat}
                profileSrc={old}
                title='Vielle branche'
            /> 

            <Story
                image={fishing}
                profileSrc={man}
                title='Vieux débris'
            />   
        </div>
    )
}

export default StoryReel