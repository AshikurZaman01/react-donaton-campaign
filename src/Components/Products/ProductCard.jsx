import { Link } from "react-router-dom";

const ProductCard = ({prodcut}) => {

    const {id, Picture, Category, Title, card_bg, category_bg, text_button_bg , price, description} = prodcut || {};

    return (
        <div>
            
            <div>
                <Link to={`/products/${id}`}>
            <div style={{backgroundColor : card_bg}} className="mx-auto relative flex max-w-[24rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
           
           <div className="relative  h-[150px] m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
               <img className="h-full w-full"
               src={Picture}
               alt="ui/ux review check"
               />
           </div>

     <div className=" px-3 py-3 h-[150px]">
       <h1 className=" font-semibold inline-block px-2 rounded" style={{color:text_button_bg , backgroundColor: category_bg }}>{Category}</h1>
      
       <h4 style={{color:text_button_bg }} className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         {Title}
       </h4>
     </div>
     
           </div>
            </Link>
            
            </div>

        </div>
    );
};

export default ProductCard;