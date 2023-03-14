import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ProductListingProps } from '../../types/product'
import Box from './box'
import SimilarProduct from '../elements/similarProduct'

const Carousel = ({ product, similarProducts }: ProductListingProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil((similarProducts?.length ?? 0) / 5)

  const handleNextSlide = () => {
    let newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <Box>
      <div className='relative'>
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className='absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
        />
        <div className='w-full flex overflow-hidden relative m-auto'>
          <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePrevSlide} className='relative z-10 w-full h-full flex justify-center'>
            {similarProducts?.map((product, index) => {
              if (Math.floor(index / 5) === currentSlide) {
                return <SimilarProduct key={index} product={product} />
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className='absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
        />

        {/* <div className='relative flex justify-center p-2 mt-8'>
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
        </div> */}
      </div>
    </Box>
  )
}

export default Carousel
