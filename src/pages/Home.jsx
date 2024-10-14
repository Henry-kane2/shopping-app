import React from 'react'
import { products} from '../products'
import ProductCarts from '../component/ProductCarts'


const Home = () => {


  return (

    <div>
      <h1 className='text-3xl text-white my-5 text-center justify-center font-bold'>List Products</h1>
      <p className=' text-center mb-3 font-bold uppercase
       bg-gradient-to-t from-slate-100 via-slate-400 to-slate-600
       rounded-xl text-black'>get your image and products here</p>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product, key) =>
        <ProductCarts key={key} data={product}/>
        )}
      </div>
    </div>

  )
}

export default Home;
