import Story from './story';
/* import army from '../../public/images/army.jpg';
import supreme from '../../public/images/supreme.jpg';
import family from '../../public/images/family.jpg';
import america from '../../public/images/america.jpg';
import seat from '../../public/images/seat.jpg';
import old from '../../public/images/old.jpg';
import man from '../../public/images/man.jpg';
import fishing from '../../public/images/fishing.jpg'; */
import classes from './storyReel.module.css';

function StoryReel() {
    return (
        <div className={classes.storyReel}>
            <Story
                /* image={family}
                profileSrc={army} */
                title='Vielle croûte'
            />
            <Story
                /* image={america}
                profileSrc={supreme} */
                title='Vieux chnok'
            />

            <Story
                /* image={seat}
                profileSrc={old} */
                title='Vielle branche'
            />

            <Story
                /* image={fishing}
                profileSrc={man} */
                title='Vieux débris'
            />
        </div>
    );
}

export default StoryReel;