import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useLoaderData, useParams } from 'react-router-dom';

const Product = () => {

    const {id} = useParams();

    const products = useLoaderData();


    const [product , setProduct] = useState();
    const { Picture, Category, Title, card_bg, category_bg, text_button_bg , price, description} = product || {};
    useEffect(()=>{
        
        const findProduct = products?.find(pro => pro.id === id);
        setProduct(findProduct);
    },[id , products])

    const hanleAddProduct = () =>{
        const addedProducts = [];

        const donationProducts =   JSON.parse(localStorage.getItem('products'));

        if(!donationProducts)
        {
            addedProducts.push(product)
            localStorage.setItem('products' , JSON.stringify(addedProducts))
            Swal.fire(
                'Donation Successful',
                'success'
              )
        }else
        {
            const isExists = donationProducts.find(product => product.id === id);
            if(!isExists)
            {
                addedProducts.push(...donationProducts , product);
                localStorage.setItem('products' , JSON.stringify(addedProducts))
                Swal.fire(
                    'Donation Successful',
                    'success'
                  )
            }
            else
            {
                Swal.fire({
                    icon: 'error',
                    title: 'ALready Donated...',
                  })
            }

            

        }
    }

    return (
        <div>
            
            <div className='my-[20px]'>
                <div className='w-full relative '>
                    <img className='w-full h-[300px] rounded ' src={Picture} alt="" />
                    
                    <div className='absolute bottom-0 left-0 w-full '>
                    <div className="bg-black bg-opacity-50 text-white p-10">
                        <div>
                        <div style={{ backgroundColor: text_button_bg }} className='flex absolute bottom-5 left-10 gap-2 px-3 py-1 text-xl rounded text-white'>
                           
                            
                            <button onClick={hanleAddProduct}>Donate <span>${price}</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div>
                    <h1 className='text-[40px] font-medium py-4'>{Title}</h1>
                    <p className='text-justify text-[16px] font-normal'>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default Product;