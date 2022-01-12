import { Avatar } from '@mui/material';
import classes from './sidebarRow.module.css';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className={classes.sidebarRow} >
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;