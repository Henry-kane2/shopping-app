import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { toggleStatusTab } from '../Stores/Cart';



const CartTab = () => {

  const carts = useSelector(Store => Store.cart.items);

  const statusTab = useSelector(Store => Store.cart.statusTab);

  const dispatch = useDispatch(); 

  const handleCloseTabCart = ()=>{
    dispatch(toggleStatusTab());
  }

  return (
    <div className={`fixed top-0 left-0 bg-slate-400 rounded-xl
     text-white shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
      transform transition-transform duration-500 ${statusTab===false? ' translate-y-full':''}`}>
       <h2 className='p-5 text-white text-center text-3xl font-bold'>Shopping Cart</h2> 
        <div className='p-5'>
         {carts.map((item, key) =>
           <CartItem key={key} data={item}/>
           )}
       </div>
       <div className=''>
         <button className='bg-black gap-1 rounded-md text-white w-full h-20 items-center
          text-center ' onClick={handleCloseTabCart}>CLOSE</button>
         
       </div>
    </div> 
 )
}

export default CartTab;
