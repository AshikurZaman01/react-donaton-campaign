import React from 'react';
import { Link } from 'react-router-dom';

const DonCard = ({donation}) => {

    
    const {id, Picture, Category, Title, card_bg, category_bg, text_button_bg , price, description} = donation || {};

    return (
        <div>
            <div>
            <div style={{backgroundColor : card_bg}} className="mx-auto relative flex w-full max-w-[48rem] h-[200px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
     <div className='w-[200px]'>
        <img className='h-full w-full' src={Picture} alt="" />
     </div>
      
      <div className="p-6">
       
      <div className=" px-3 py-3 h-[150px]">
       <h1 className=" font-semibold inline-block px-2 rounded" style={{color:text_button_bg , backgroundColor: category_bg }}>{Category}</h1>
      
       <h4 style={{color:text_button_bg }} className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         {Title}
       </h4>
       <div>
        
       <Link to={`/products/${id}`}>
        <button style={{backgroundColor : text_button_bg}} className='text-white px-6  mt-[20px] btn'>View Details</button>
        </Link>
       </div>
     </div>       
     </div>
     

    </div>
            </div>
        </div>
    );
};

export default DonCard;