import { Fragment } from "react";
import PrimarySearchAppBar, { Header } from "../components/Header";
import CreatePost from "../components/Post/CreatePost";
import { Grid } from "@mui/material";

function HomePage() {

  return (
    <Fragment>
      <PrimarySearchAppBar />
      <Grid container justifyContent="center">
        <CreatePost />
      </Grid>
      
    </Fragment>

  )
}

export default HomePage;