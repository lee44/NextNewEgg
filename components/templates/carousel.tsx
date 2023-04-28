import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ProductListingProps } from '../../types/product'
import Box from './Box'
import SimilarProduct from '../product/SimilarProduct'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Carousel = ({ product, similarProducts }: ProductListingProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { width, height } = useWindowDimensions()
  const productsPerSlide = (width ?? 0) >= 1440 ? 5 : (width ?? 0) >= 1024 ? 4 : (width ?? 0) >= 768 ? 3 : 1
  const totalSlides = Math.ceil((similarProducts?.length ?? 0) / productsPerSlide)

  const handleNextSlide = () => {
    let newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <Box additionalClasses='mt-2 xl:p-8 px-4'>
      <div className='relative'>
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className='absolute left-0 z-20 m-auto text-5xl text-gray-400 cursor-pointer inset-y-1/2 hover:text-white hover:bg-button-hover hover:rounded-full'
        />
        <div className='relative flex w-full m-auto overflow-hidden'>
          <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePrevSlide} className='relative z-10 flex justify-center w-full h-full'>
            {similarProducts?.map((product, index) => {
              if (Math.floor(index / productsPerSlide) === currentSlide) {
                return <SimilarProduct key={index} product={product} />
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className='absolute right-0 z-20 m-auto text-5xl text-gray-400 cursor-pointer inset-y-1/2 hover:text-white hover:bg-button-hover hover:rounded-full'
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
