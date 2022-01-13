
import React from 'react'
import Image from 'next/image'
import cat from '../../public/images/cat.jpg'

function ProfileHeader() {
  return (
    <div>
      <div
        className=" w-full flex justify-center w-80"
        style={{ height: "348px" }}
      >
        <div className="flex flex-col">
          <div
            className="md:relative bg-gray-100 md:rounded-bl-lg md:rounded-br-lg
                        bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400"
            style={{ width: "940px", height: "348px" }}
          >
            {/* // cover photo */}
            <div className="">
              {/* profile photo */}

              <Image 
              src={cat} 
              alt="Profile pic" 
              width={500} 
              height={500} />

            </div>
          </div>
        </div>
      </div>
      {/* // INFOS */}
      <div className="flex justify-center flex-col mt-5 mb-3.5">
        <h1 className="text-center font-bold text-3xl">Can Canbolat</h1>
        <a href="#" className="text-center text-blue-700 font-semibold">
          Add Bio
        </a>
        <hr className="full flex self-center w-2/3 mt-2" />
      </div>
      {/* // END INFOS */}
      {/* // TABS */}
      <div className="w-full flex justify-center">
        <div className="flex justify-between mb-2.5">
          <ul className="flex px-5 py-1.5">
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Posts</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">About</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Friends</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Photos</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Story Archive</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">More</a>
            </li>
          </ul>
          <ul className="flex mb:pl-14">
            <li className="px-2 font-semibold">
              <button className="bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold">
                <i className="bx bx-plus-circle text-xl mr-2"></i>
                Add to Story
              </button>
            </li>
            <li className="px-2 font-semibold">
              <button className="bg-gray-200 px-5 py-1 rounded-lg text-black font-semibold">
                <i className="bx bx-edit-alt mr-2 text-xl"></i>
                Edit Profile
              </button>
            </li>
            <li className="px-2 font-semibold">
              <button className="bg-gray-200 px-3 py-1 rounded-lg text-black font-semibold">
                ...
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* // END TABS */}
    </div>
  );
}

export default ProfileHeader;
