
import { Typography } from "@mui/material";
import React, { useState } from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
{/* <Carousel>
    <img src="/image1.png" />
    <img src="/image2.png" />
</Carousel> */}
// import Carousel from "nuka-carousel/lib/carousel";

export default function Lessons() {
    const prefix = 'https://raw.githubusercontent.com/HatScripts/circle-flags/414b51b671957b8f1c1ccbe5367c0b7e7b525249/flags/'
    const images = [
        `${prefix}ca.svg`,
        `${prefix}de.svg`,
        `${prefix}gb-con.svg`,
        `${prefix}gb-eng.svg`,
        `${prefix}gb-nir.svg`,
        `${prefix}gb-ork.svg`,
        `${prefix}gb-sct.svg`,
        `${prefix}gb-wls.svg`,
        `${prefix}gb.svg`,
    ]

    const arrowCss = 'absolute cursor-pointer z-10 top-1/2 text-white hover:text-lsg duration-300';
    const NextArrow = ({ onClick }) => {
        return <div className={`${arrowCss} right-0`} onClick={onClick}>
            <FaArrowRight />
        </div>
    }
    const PrevArrow = ({ onClick }) => {
        return <div className={`${arrowCss} left-0`} onClick={onClick}>
            <FaArrowLeft />
        </div>
    }

    const [imageIndex, setImageIndex] = useState(0);

    return <div className="h-screen w-screen bg-coffee-mug bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Learn to Bake</Typography>
        <div className='mt-4 flex justify-center'>
            <div className='w-208'>
                <Slider
                    infinite lazyLoad centerMode
                    speed={300}
                    slidesToShow={3}
                    centerPadding={0}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    beforeChange={(_, next) => setImageIndex(next)}
                >
                    {images.map((image, index) => {
                        const standard = 'w-80 m-0 scale-50 opacity-50 duration-300';
                        return <div className={index === imageIndex
                                    ? `${standard} scale-100 opacity-100`
                                    : standard
                        }>
                            <img src={image} alt={image} />
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    </div>
}
