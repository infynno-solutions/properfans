'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { useState } from 'react'
import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiSignalTowerLine } from 'react-icons/ri'

const Stories = ({ latestStories }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const CustomPrevArrow = (props: any) => (
    <div
      onClick={props.onClick}
      className={`${
        currentSlide === 0
          ? 'hidden'
          : 'absolute flex top-[30%] -left-2 cursor-pointer h-[26px] w-[26px] shadow-2xl bg-white rounded-full items-center z-10 border border-gray-300'
      }`}
    >
      <GrFormPrevious className="ml-1" />
    </div>
  )

  const CustomNextArrow = (props: any) => (
    <div
      onClick={props.onClick}
      className="absolute flex top-[30%] cursor-pointer h-[26px] w-[26px] shadow-2xl bg-white rounded-full items-center z-10 right-0 border border-gray-300"
    >
      <GrFormNext className="ml-1" />
    </div>
  )

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="my-10">
      <Slider {...settings}>
        {latestStories.stories.map((story: any, index: number) => (
          <div key={index} className="relative">
            {story.status === 'story' && (
              <div className=" absolute h-[26px] w-[26px] bg-gradient-button rounded-full bottom-5 right-4 z-20">
                <div className="grid items-center place-items-center h-full ">
                  <AiOutlinePlus color="white" />
                </div>
              </div>
            )}
            {story.status === 'live' && (
              <div className=" absolute h-[26px] w-[26px] bg-gradient-live-story rounded-full bottom-5 right-4 z-20">
                <div className="grid items-center place-items-center h-full ">
                  <RiSignalTowerLine color="white" />
                </div>
              </div>
            )}
            <div
              className={`
            ${
              story.status === 'active'
                ? 'border-blue-400'
                : story.status === 'viewed' || story.status === 'story'
                ? 'border-gray-400'
                : 'border-red-500'
            }
            rounded-full h-[68px] w-[68px] overflow-hidden border-2 right-0 text-center`}
            >
              <div className="relative h-[66px] w-[66px]">
                <Image src={story.image} alt={story.name} fill />
              </div>
            </div>
            <p className="text-xs text-center mt-[6px] text-gray-500">
              {story.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Stories
