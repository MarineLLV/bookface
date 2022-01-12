import { Avatar } from "@mui/material";
//import { ExpandMoreOutlined } from "@mui/icons";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
//import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from "./post.module.css";

function Post({ profilePic, imgName, username, timestamp, message }) {
  return (
    <div className={classes.post}>
      <div className={classes.post__top}>
        <Avatar src={profilePic} className={classes.post__avatar} />

        <div className={classes.post__topInfo}>
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>

          {/* image is coming later */}
        </div>
      </div>

      <div className={classes.post__options}>
        <div className={classes.post__option}>
          <ThumbUpIcon />
          <p>like</p>
        </div>
        <div className={classes.post__option}>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className={classes.post__option}>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className={classes.post__option}>
          <AccountCircleIcon />
          {/* <ExpandMoreOutlined /> */}

        </div>
      </div>
    </div>
  );
};

export default Post;
