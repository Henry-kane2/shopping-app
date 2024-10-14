import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Stores/Cart';
const Details = () => {
  const {slug} =useParams()
  const [ details ,setDetails] = useState([]);
  const [quantity, setQuantity]=useState(1);
   const dispatch= useDispatch()
  useEffect(()=>{
     const findDetail = products.filter( product =>product.slug === slug)
     if(findDetail.length >0) {
      setDetails(findDetail[0]);
     }else{
      window.location.href='/';
     }
  },[slug])

 const handleMinusQuantity=()=>{
  setQuantity(quantity-1 < 1? 1:quantity -1)
 }
 const handlePlusQuantity=()=>{
  setQuantity(quantity+1 )
 }
 const handleAddToCart =()=>{

     dispatch(addToCart({
      productId: details.id,
      quantity: quantity
     }))
 }

  return (
    <div>
      <h1 className="text-3xl text-center"> PRODUCT DETAIL</h1>
      <div className=" grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={details.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{details.name}</h1>
          <p className="font-bold text-3xl">${details.price}</p>
          <div className=" flex gap-5">
            <div className="flex  gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-10 w-10
                 font-bold text-xl rou flex justify-center
                  rounded-xl text-black items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-10 w-10 
              font-bold text-xl rou flex justify-center 
              rounded-xl text-black items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-10 w-10 
                font-bold text-xl rou flex justify-center
                 rounded-xl text-black items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className=" bg-blue-600 text-white
               px-7 py-2  rounded-xl inline shadow-2xl mr-3 "
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
          <p>{details.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
