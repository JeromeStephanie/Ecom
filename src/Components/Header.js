import React, { useState } from 'react'
import { Logo, cart, cartphoto } from '../Assets/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const productData = useSelector(state => state.bazar.productData)
  const userInfo = useSelector(state => state.bazar.userInfo)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl Links h-full mx-24 flex items-center justify-between'>
        <Link to={'/'}>
          <div className='Logo'>
            <img className='Img' src={Logo} alt='Logo' />
          </div>
        </Link>
        <div className='flex nav items-center gap-8'>
          <ul
            className={`flex items-center ul gap-8 ${
              showMenu ? 'show-menu' : ''
            }`}
          >
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Shop
            </li>
            <Link to={'/'}>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Home
              </li>
            </Link>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
              Blog
            </li>
          </ul>
          <Link to={'/cart'}>
            <div className='relative Img'>
              <img className='w-8 Img-cart' src={cart} alt='Cart' />
              <span className='absolute num w-6 top-3 left-1 text-sm flex items-center justify-center font-semibold'>
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={'/login'}>
            <img
              className='w-8 user-img h-8 rounded-full'
              src={userInfo ? userInfo.image : cartphoto}
              alt='userLogo'
            />
          </Link>
          {userInfo && (
            <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
              {userInfo.name}
            </p>
          )}
          <div className='menu-icon' onClick={() => setShowMenu(!showMenu)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
