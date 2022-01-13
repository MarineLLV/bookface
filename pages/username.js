import React from 'react';
import { Fragment } from 'react';
import Profile from '../components/Profile/Profile.js';
import Header from '../components/Layout/header';



function Username() {
    return (
        <div className="App">
            <Header />
            <Fragment>
                <Profile />

            </Fragment>
        </div>
    );
}

export default Username;