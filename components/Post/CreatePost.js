import { Card } from "@mui/material"
import { CardContent } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActions } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Share } from "@mui/icons-material";
import { red } from "@mui/material/colors";

function CreatePost() {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="/images/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          </CardActions>
          </Card>
    )
}

export default CreatePost;