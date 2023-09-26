import React, { useEffect, useState } from 'react';
import DonCard from './DonCard';

const Donation = () => {

    const [donations , setDonations] = useState([])
    const [noData , setNoData] = useState("")


    useEffect(()=>
    {
        const donationProducts =   JSON.parse(localStorage.getItem('products'));

        if(donationProducts){
            setDonations(donationProducts);
        }else
        {
            setNoData('No Data Found')
        }
    },[])


    return (
        <div>
            <div>
                {
                    noData ? <h2 className='text-3xl font-bold flex justify-center items-center h-[70vh]'>{noData}</h2> : 
                    <div>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-[30px]'>
                            {
                                donations.map(donation => <DonCard donation={donation} key={donation.id}></DonCard>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Donation;