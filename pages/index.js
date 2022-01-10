import { Fragment } from 'react';
import Header from '../components/Layout/header';
import Sidebar from '../components/sidebar';
import Feed from '../components/feed';
import Widget from '../components/widget';


function HomePage() {
  return (
    <div className="App">
      <Header />
      <Fragment>
        <Sidebar />
        <Feed />
        <Widget />
      </Fragment>
    </div>
  );
}

export default HomePage;