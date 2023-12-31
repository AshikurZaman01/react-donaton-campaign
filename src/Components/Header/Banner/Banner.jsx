import React, { useEffect, useState } from 'react';
import myImage from '/src/Resources/Clothing.png';
import {  useLoaderData , Link } from 'react-router-dom'; 

const Banner = () => {
  const [category, setCategory] = useState('');

  const [findData , setFindData] = useState();
  const data = useLoaderData();

  useEffect(() => {
    const searchData = data.filter(dd => dd.Category.toLowerCase() === category.toLowerCase());
    setFindData(searchData);
  }, [category, data]); 

  const handleInputChange = (event) => {
    setCategory(event.target.value.toLowerCase());
  };

  const handleSearchBtn = (event) => {
    event.preventDefault();
    console.log(findData);

    setCategory('');
  };

  return (
    <div className="h-[60vh] flex justify-center pb-[40px] my-5 relative">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 bg-black" style={{ backgroundImage: `url(${myImage})` }}></div>
      <div className="absolute inset-0 w-full h-full opacity-50"></div>
      <div className="flex justify-center items-center relative z-10">
        <div className="p-6 rounded-lg text-center text-black">
          <h1 className="text-3xl md:text-6xl font-medium md:font-semibold mb-8">I Grow By Helping People In Need</h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-40 md:w-80 px-4 py-2 border border-gray-400 rounded-l-lg focus:outline-none"
              name=""
              id=""
              placeholder="Enter your Category"
              value={category}
              onChange={handleInputChange}
            />
            <Link to={`/products/:findD`}>
              <button onClick={handleSearchBtn} className="bg-red-500 text-white px-5 py-2 rounded-r-lg hover:bg-pink-600 focus:outline-none">
                Search
              </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
