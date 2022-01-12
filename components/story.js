import { Avatar } from '@mui/material';
import classes from './story.module.css';

function Story({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={classes.story} >
            <Avatar src={profileSrc} className={classes.story__avatar} />
            <h4>{title}</h4>
        </div>
    );
}

export default Story;