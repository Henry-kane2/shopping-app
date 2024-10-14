import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { BiBasket } from 'react-icons/bi';
import { useSelector,useDispatch } from 'react-redux';
import { toggleStatusTab } from '../Stores/Cart';
import { Home } from 'lucide-react';


const Header = () => {

const [ totalQuantity,setTotalQuantity]=useState(0);
const carts = useSelector(store => store.cart.items);

const dispatch= useDispatch();
useEffect(()=>{
  let total = 0;
  carts.forEach(item => total += item.quantity);
  setTotalQuantity(total)
},[carts])

 const handleOpenTabCart = ()=>{
  dispatch(toggleStatusTab());
 }

  return (
   <header className=' flex justify-between z-10  rounded-xl px-2 items-center mb-5 '>
    <Link to='/'  className='text-xl font-semibold flex'> <Home/>Home.</Link>
    <div className='w-10 h-10 bg-gray-500 rounded-xl flex justify-center items-center hover:bg-neutral-300
     relative' onClick={handleOpenTabCart}>
      <BiBasket className='w-8'/>
    
      <span className='absolute top-2/3 right-1/2 bg-blue-500 text-white text-sm
       w-5 h-5 rounded-xl flex justify-center items-center'>{totalQuantity}</span>
    </div>
   </header>
  )
}

export default Header;
