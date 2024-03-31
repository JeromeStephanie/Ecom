import React from 'react'
import { logoLight, payment } from '../Assets'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome
} from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl footer mx-24 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3'>
        <div className='flex flex-col gap-7'>
          <img className='w-32' src={logoLight} alt='logoLight' />
          <p className='text-white text-sm -tracking-wide'>@ ReactEcomm.com</p>
          <img className='w-56' src={payment} alt='payment' />
          {/* ================= LogoIcon Start here =============== */}
          <div className='flex gap-5 text-lg text-gray-400'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        {/* =================== LogoIcon End here ================ */}
        {/* =================== LocateUs Start here ================ */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4 mt-4'>locate Us</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>Festac, Lagos, Nigeria</p>
            <p>Mobile: 07044 432333</p>
            <p>Phone: 09065 4566777</p>
            <p>E-mail: jsteph@gmail.com</p>
          </div>
        </div>
        {/* =================== LocateUs End here ================ */}
        {/* =================== Profile Start here ================ */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4 mt-4'>profile</h2>
          <div className='flex flex-col gap-2 text-base'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* =================== Profile End here ================ */}
        {/* =================== Subscribe Start here ================ */}
        <div className="flex flex-col justify-center mt-4">
            <input className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" type="text" />
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
        {/* =================== Subscribe End here ================ */}
      </div>
    </div>
  )
}

export default Footer
