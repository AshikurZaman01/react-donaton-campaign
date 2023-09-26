import React, { useEffect, useState } from 'react';
import DonCard from './DonCard';
import Swal from 'sweetalert2'


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
            setNoData('No Data Found');
        }
    },[])

    const handleDeleteBtn = ()=>
    {
        localStorage.clear();
        setDonations([]);
        setNoData('No Data Found');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
            }
          })

    }


    return (
        <div>
            <div>
                {
                    noData ? <h2 className='text-3xl font-bold flex justify-center items-center h-[70vh]'>{noData}</h2> : 
                    <div>

                           <div className='text-center my-5'>
                            
                            {
                            donations.length > 0 && <button onClick={handleDeleteBtn} className='btn bg-pink-500 text-white px-10 hover:bg-pink-300 hover:text-black'>Delete All</button>
                            
                            }
                            
                            </div> 
                        

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