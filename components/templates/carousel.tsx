import Image from 'next/image'
import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ProductListingProps } from '../../pages/product/[id]'

const Carousel = ({ product, similarProducts }: ProductListingProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    let newSlide = currentSlide === similarProducts?.length ?? 0 - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? similarProducts?.length ?? 0 - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <div className='relative'>
      <AiOutlineLeft onClick={handlePrevSlide} className='absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20' />
      <div className='w-full h-[200px] flex overflow-hidden relative m-auto'>
        <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePrevSlide} className='relative z-10 w-full h-full'>
          {similarProducts?.map((product, index) => {
            if (index === currentSlide) {
              return <Image key={index} src={product?.img ?? ''} alt='product' className='object-contain' fill />
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className='absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
      />

      <div className='relative flex justify-center p-2 mt-8'>
        {similarProducts?.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
                  : 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
