import React from 'react';
import Products from '../Products/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const prodcuts = useLoaderData()

    return (
        <div>
          <Products></Products>
        </div>
    );
};

export default Home;