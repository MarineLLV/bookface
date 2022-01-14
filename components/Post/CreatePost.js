import React from 'react';
//import { Feeling, Image, LiveVideo } from '../../public/images/icons';
import Image from 'next/image';
import { Fragment } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


function CreatePost() {
    return (
        <Fragment>
            {/* ADD POST */}
            <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
                <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">


                    <Image
                        src='/images/cat.jpg'
                        alt="Profile pic"
                        width={500}
                        height={500}
                    />



                    <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
                        <span>
                            What&apos; s on your mind, Can ?
                        </span>
                    </div>
                </div>
                <div className="p-2 flex">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                        <VideocamIcon />
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                        <InsertPhotoIcon />
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Photo/Video</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                        <SentimentVerySatisfiedIcon />
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Life Event</span>
                    </div>
                </div>
            </div>
            {/* END ADD POST */}
        </Fragment>
    )
}

export default CreatePost;