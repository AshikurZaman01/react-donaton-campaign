import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';

const Home = () => {

  const prodcuts = useLoaderData();

    return (
        <div>
         
         <Products prodcuts={prodcuts}></Products>

        </div>
    );
};

export default Home;