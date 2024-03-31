import React, { useState } from 'react'
import {
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo
} from '../Assets'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : prev => prev + 1)
  }

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[400vw] h-full flex transition-transform duration-1000'
        >
          <img
            className='w-screen h-full object-cover'
            loading='priority'
            src={data[0]}
            alt='ImgOne'
          />
          <img
            className='w-screen h-full object-cover'
            loading='priority'
            src={data[1]}
            alt='ImgOne'
          />
          <img
            className='w-screen h-full object-cover'
            loading='priority'
            src={data[2]}
            alt='ImgOne'
          />
          <img
            className='w-screen h-[400px] object-contain'
            loading='priority'
            src={data[3]}
            alt='ImgOne'
          />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div
            onClick={prevSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-500 duration-300'
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-500 duration-300'
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
