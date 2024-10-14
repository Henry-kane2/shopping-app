import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../component/Header'
import CartTab from './CartTab'
import { useSelector } from 'react-redux';

const Layout = () => {
  const statusTabCart =useSelector(Store => Store.cart.statusTab);
  return (
    <div className=''>
      <main className={`w-[1200px] max-w-full m-auto p-5 ${statusTabCart === false ? '': '-translate-x-5'}`}>
        <Header/>
        <Outlet/>
      </main>
      <CartTab/>
    </div>
  )
}

export default Layout;
