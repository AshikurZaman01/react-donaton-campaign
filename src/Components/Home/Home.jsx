import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Banner from '../Header/Banner/Banner';

const Home = () => {

  const prodcuts = useLoaderData();

    return (
        <div>
          <div>
          <Banner></Banner>
          </div>
         
         <Products prodcuts={prodcuts}></Products>

        </div>
    );
};

export default Home;