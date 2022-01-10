import MessageSender from './messageSender';
import StoryReel from './StoryReel';
import Post from './post';
//import supreme from '../../public/images/supreme.jpg'

function Feed() {
    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />
            <Post
                //profilePic={supreme}
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
    );
}

export default Feed;