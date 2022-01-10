import React from 'react'

const Widget = () => {
    return (
        <div className='widgets'>
            <iframe src= "https://www.youtube.com/watch?v=d3AkLvhkEO4"
                    width="340"
                    height="1500"
                    style={{  border: "none", overflow: "hidden "}}
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                    ></iframe>
        </div>
    )
}

export default Widget