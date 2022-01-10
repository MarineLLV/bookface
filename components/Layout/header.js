import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
/* import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; */
import classes from './header.module.css';


function Header() {
    return (
        <div className={classes.header} >
            <div className={classes.header__left}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_(square).png" alt="Facebook logo" />
            </div>

            <div className={classes.header__input}>
                <SearchIcon />
                <input placeholder='Search Facebook' type="text" />
            </div>

            <div className={classes.header__center}>
                <div className={classes.header__option}>
                    <HomeIcon fontsize='large' />
                </div>
                <div className={classes.header__option}>
                    <FlagIcon fontsize='large' />
                </div>
                <div className={classes.header__option}>
                    <SubscriptionsOutlinedIcon fontsize='large' />
                </div>
                <div className={classes.header__option}>
                    <StorefrontOutlinedIcon fontsize='large' />
                </div>
                <div className={classes.header__option}>
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>
            </div>

            <div className={classes.header__right}>
                <div className={classes.header__info}>
                    <Avatar />
                    <h4>Morgane </h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                {/* <IconButton>
                    <ExpandMoreIcon />
                </IconButton> */}

            </div>

        </div>
    );
}

export default Header;