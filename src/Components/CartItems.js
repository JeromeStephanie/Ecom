import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart
} from '../redux/bazarSlice'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const dispatch = useDispatch()
  const productData = useSelector(state => state.bazar.productData)

  return (
    <div className='w-2/3 cart-items pr-10'>
      <div className='w-full'>
        <h2 className='font-titleFont text-2xl'>shopping cart</h2>
      </div>
      <div>
        {productData.map(item => (
          <div
            key={item.id}
            className='flex items-center justify-between gap-6 mt-6'
          >
            <div className='flex items-center gap-2'>
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
                className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'
              />
              <img
                className='w-52 cart-itemsImg h-32 object-cover'
                src={item.image}
                alt='productImg'
              />
            </div>
            <h2 className='w-52'>{item.title}</h2>
            <p className='w-10'>${item.price}</p>
            <div className='flex gap-4'>
              <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                <p className='text-sm'>Quantity</p>
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <span
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          image: item.image,
                          quantity: 1,
                          description: item.description
                        })
                      )
                    }
                    className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          image: item.image,
                          quantity: 1,
                          description: item.description
                        })
                      )
                    }
                    className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                  >
                    +
                  </span>
                </div>
              </div>
              <p className='w-34 flex items-center'>
                {item.quantity * item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error('Your Cart is Empty!')
        }
        className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'
      >
        Reset Cart
      </button>
      <Link to={"/"}>
        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
          <span className='text-sm'>
          <HiOutlineArrowLeft/>
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default CartItems
