
import { Card, Typography, CardMedia, CardContent, CardActions } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import DoneIcon from '@mui/icons-material/Done';

function LessonCard({ lesson, index, setLessonIndex, lessonIndex }) {
    const [processing, setProcessing] = useState('notProcessed');

    const standard = 'w-72 m-0 duration-300';
    return <div className={index === lessonIndex
        ? standard
        : `${standard} scale-75 opacity-50`
    }>
        <Card>
            <CardMedia
                component='img'
                sx={{ height: '10rem' }}
                image={lesson.image}
                alt={lesson.name}
            />
            <CardContent className='bg-dgray flex flex-col' sx={{ height: '10rem' }}>
                <div className='flex flex-row content-center'>
                    <Typography
                        color='white'
                        variant='h5'
                        component='div'
                        className='flex flex-grow'
                    >
                        {lesson.name}
                    </Typography>
                    <Typography
                        color='gray'
                        variant='h5'
                        component='div'
                        className=''
                    >£{lesson.price}</Typography>
                </div>
                <Typography
                    color='white'
                    variant='body1'
                    component='div'
                >
                    {lesson.description}
                </Typography>
            </CardContent>
            <CardActions className='bg-dgray flex justify-center content-top'>
                {/* TODO: add custom styling to make this always white even if disabled/processing */}
                <LoadingButton
                    size="small"
                    sx={{
                        color: 'white'
                    }}
                    onClick={(event) => {
                        if (index !== lessonIndex || processing !== 'notProcessed') return
                        setProcessing('processing');
                        setTimeout(() => {
                            setProcessing('processed');
                        }, 2000)
                    }}
                    loading={processing === 'processing'}
                >{processing === 'processed' ? <DoneIcon /> : 'purchase'}</LoadingButton>
            </CardActions>
        </Card>
    </div>
}

export default function Lessons() {
    // TODO: add descriptions
    // TODO: local images
    const lessontypes = [
        {
            name: 'Perfecting Pizza',
            description: '',
            price: '80',
            image: 'https://twomagpiesbakery.co.uk/wp-content/uploads/2020/10/greenman.jpg'
        },
        {
            name: 'Bread Basics',
            description: '',
            price: '95',
            image: 'https://cdn.shopify.com/s/files/1/1165/4656/products/Beginner_Bread_Making_5000x.jpg?v=1462957625'
        },
        {
            name: 'Croissant Creation',
            description: '',
            price: '62',
            image: 'https://www.breadahead.com/wp/wp-content/uploads/online-baking-banner-4-1.png'
        },
        {
            name: 'Eclair Essentials',
            description: '',
            price: '73',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chocolate-eclairs-1603280323.jpg?crop=1.00xw:0.335xh;0,0.220xh&resize=1200:*'
        }
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

    const [lessonIndex, setLessonIndex] = useState(0);

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
                    beforeChange={(_, next) => setLessonIndex(next)}
                >
                    {lessontypes.map((lesson, index) => 
                        <LessonCard 
                            lesson={lesson}
                            index={index}
                            setLessonIndex={setLessonIndex}
                            lessonIndex={lessonIndex}
                        />
                    )}
                </Slider>
            </div>
        </div>
    </div>
}
