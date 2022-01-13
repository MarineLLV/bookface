import React from 'react'
import { Link } from 'next/Link'
//import AddComments from '../Post/AddComments'
//import Comments from '../Post/Comments'
import CreatePost from '../Post/Post'
import Post from '../Post/Post'
import ProfileHeader from './ProfileHeader'
import Image from 'next/image'
import cat from '../../public/images/cat.jpg'

function Profile() {
    return (
        <div className="h-screen">
            <div className="mt-14 shadow bg-white h-screen">
                {/* PROFILE HEADER */}
                <ProfileHeader />
                {/* END PROFILE HEADER */}

                {/* // CONTENT */}
                <div>
                    <div className='bg-gray-100 '>
                        <div className="flex justify-center h-screen">
                            {/* LEFT */}
                            <div>
                                {/* // INTRO */}
                                <div className="mr-12 mt-4">
                                    <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                                        <h1 className="font-bold text-xl">Intro</h1>
                                    </div>
                                </div>
                                {/* // END INTRO */}

                                {/* // PHOTOS */}
                                <div className="mr-12 mt-4">
                                    <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                                        <div className="flex justify-between">
                                            <h1 className="font-bold text-xl">Photos</h1>
                                            <a href="#" className="text-lg text-blue-700">See All Photos</a>
                                        </div>
                                    </div>
                                </div>
                                {/* // END PHOTOS */}

                                {/* // FRIENDS */}
                                <div className="mr-12 mt-4">
                                    <div className="p-4 shadow rounded-lg bg-white w-80" id="intro">
                                        {/* Header */}
                                        <div className="flex justify-between">
                                            <h1 className="font-bold text-xl">Friends</h1>
                                            <Link to="/friends/myId" className="text-lg text-blue-700 hover:bg-blue-200">See All Friends</Link>
                                        </div>
                                        {/* List */}
                                        <div className="">
                                            <p className="text-base text-gray-400">1000 friends</p>
                                            <div className="grid grid-cols-3 gap-1">
                                                <div className="bg-white p-0.5">

                                                    <Image
                                                        src={cat}
                                                        alt="Profile pic"
                                                        width={500}
                                                        height={500}
                                                    />

                                                    <Image
                                                        src={cat}
                                                        alt="Profile pic"
                                                        width={500}
                                                        height={500}
                                                    />

                                                    <Image
                                                        src={cat}
                                                        alt="Profile pic"
                                                        width={500}
                                                        height={500}
                                                    />




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* // END FRIENDS */}
                                </div>
                                {/* END LEFT */}

                                {/* // POST LIST */}
                                <div className="w-2/5">
                                    {/* CREATE POST */}
                                    <CreatePost />
                                    {/* END CREATE POST */}

                                    {/* POST */}
                                    <Post />
                                    {/* END POST */}
                                </div>
                                {/* // END POST LIST */}
                            </div>
                        </div>
                    </div>
                    {/* // END CONTENT */}
                </div>
            </div>
        </div>
    );
}

export default Profile