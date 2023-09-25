import React from 'react';
import ProductCard from './ProductCard';

const Products = ({prodcuts}) => {
    
    return (
        <div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {
                prodcuts?.map(prodcut => <ProductCard prodcut={prodcut} key={prodcut.id}></ProductCard>)
              }
            </div>

        </div>
    );
};

export default Products;