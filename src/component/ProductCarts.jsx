import React from 'react'
import { Link } from 'react-router-dom';
import { BiBasket } from 'react-icons/bi';
import { useSelector,useDispatch } from 'react-redux';
import {addToCart} from '../Stores/Cart';

const ProductCarts = (props) => {

   const carts =useSelector(Store => Store.cart.items)
   console.log(carts);

    const { id , name, price, image ,slug} = props.data;

    const dispatch = useDispatch();

    const  handleAddToCart=()=>{
      dispatch(addToCart({
        productId: id,
        quantity:1
      }));
    }
  return (
    
    <div className='bg-black p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
      <img src={image} alt='' className='w-full h-80 object-cover rounded-xl object-top drop-shadow-[0_80px_30px_#00007]'/>
      </Link>
      <h3 className='text-2xl py-3 text-center text-white font-medium'>{name}</h3>
      <div className='flex text-white justify-between items-center'>
        <p className='font-bold'>
            $<span className=' text-2xl text-white font-medium'>{price}</span>
        </p>
        <button className= 'bg-blue-600 p-2 rounded-md text-sm hover:bg-blue-500  flex gap-2' onClick={handleAddToCart}>
            <BiBasket className='w-5'/>
            Add To Cart
        </button>
      </div>
    </div>
    
  );
}

export default ProductCarts;
