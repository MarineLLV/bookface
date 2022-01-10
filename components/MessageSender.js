import { Avatar, Input } from '@mui/material';
import { useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import classes from './messageSender.module.css';

function MessageSender() {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('Submitting');
    }

    return (
        <div className={classes.messageSender} >
            <div className={classes.messageSender__top}>
                {/* <img src={laptop} alt={laptop} /> */}

                <form>
                    <input type="text"
                        className={classes.messageSender__input}
                        placeholder="What's on your mind ?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <Input
                        type="file"
                        className={classes.messageSender__fileSelector}
                        onChange={handleChange} />
                    <button
                        onClick={handleSubmit}
                        type='submit' >Hidden</button>

                </form>
            </div>
            <div className={classes.messageSender__bottom}>
                <div className={classes.messageSender__option}>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className={classes.messageSender__option}>
                    <PhotoLibraryIcon style={{ color: 'green ' }} />
                    <h3>Photo Video</h3>
                </div>
                <div className={classes.messageSender__option}>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Felling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;