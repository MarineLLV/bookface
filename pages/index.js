import { Fragment } from 'react';
import Header from '../components/Layout/header';
import Sidebar from '../components/sidebar';
import Feed from '../components/feed';
import Widget from '../components/Widget';
import CreatePost from '../components/Post/CreatePost'


function HomePage() {
  return (
    <div className="App">
      <Header />
      <Fragment>
        <Sidebar />
        <Feed />
        <CreatePost />
        <Widget />
      </Fragment>
    </div>
  );
}

export default HomePage;