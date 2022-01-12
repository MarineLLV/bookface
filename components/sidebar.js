import SidebarRow from './sidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
//import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
//import fox from '../../public/images/fox.jpg';

import classes from './sidebar.module.css'

function Sidebar() {

    return (
        <div className={classes.sidebar}>

            {/* <SidebarRow src={fox} title="Morgane" /> */}

            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />

            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />

            <SidebarRow Icon={PeopleIcon} title='Friends' />

            <SidebarRow Icon={ChatIcon} title='Messenger' />

            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />

            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />

            {/* <SidebarRow Icon={ExpandMoreOutlined} title='More' /> */}

        </div>
    );
}

export default Sidebar;

