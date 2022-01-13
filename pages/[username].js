import { Fragment } from 'react';
import Profile from '../components/Profile/Profile.js';
import Header from '../components/Layout/header';


function username () {
    return (
        <div className="App">
              <Header />
            <Fragment>
             <Profile />

             </Fragment>
             </div>
    );
   
}

export default username