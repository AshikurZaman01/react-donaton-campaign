import React from 'react';
import myImage from '/src/Resources/Clothing.png';

const Banner = () => {
    return (
        <div className="h-[60vh] flex justify-center pb-[40px] my-5 relative">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 bg-black" style={{ backgroundImage: `url(${myImage})`}}></div>
          <div className="absolute inset-0 w-full h-full  opacity-50"></div>
          <div className="flex justify-center items-center relative z-10">
            <div className="p-6 rounded-lg text-center text-black ">
              <h1 className="text-6xl font-semibold mb-8">I Grow By Helping People In Need</h1>
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  className="w-80 px-4 py-2 border border-gray-400 rounded-l-lg focus:outline-none"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <button className="bg-red-500 text-white px-5 py-2 rounded-r-lg hover:bg-pink-600 focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;
