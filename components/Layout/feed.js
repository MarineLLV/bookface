import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import supreme from '../../public/supreme.jpg'

const Feed = () => {
    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic={supreme}
            message='Today I m getting my new denture ! youhouuu!'
            timestamp='1164562658'
            imgName='imgName'
            username='Vieux chnock'
            />


            { /*
                postsData.map(entry => (
                    <Post 
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                    />
                ))
                */ }
        </div>
    )
}

export default Feed