
import { Card, Typography, CardMedia, CardContent, CardActions } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import DoneIcon from '@mui/icons-material/Done';

function LessonCard({ lesson, index, setLessonIndex, lessonIndex }) {
    const [processing, setProcessing] = useState('notProcessed');
    const isProcessed = () => { return processing === 'processed' };
    const alter = () => { return index !== lessonIndex };

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
            <CardContent className='bg-dgray flex flex-col' sx={{ height: '15rem' }}>
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
                    variant='outlined'
                    sx={{
                        color: isProcessed() ? '#198754' : '#e8e8e8',
                        borderColor: isProcessed() ? '#198754' : '#e8e8e8',
                        "&:hover": {
                            borderColor: isProcessed() ? '#198754' : alter() ? '#e8e8e8' : 'white',
                            color: isProcessed() ? '#198754' : alter() ? '#e8e8e8' : 'white',
                            backgroundColor: isProcessed() || alter() ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, .2)',
                            cursor: isProcessed() || alter() ? 'default' : 'pointer'
                        }
                    }}
                    onClick={(event) => {
                        if (index !== lessonIndex || processing !== 'notProcessed') return
                        setProcessing('processing');
                        setTimeout(() => {
                            setProcessing('processed');
                        }, 2000)
                    }}
                    loading={processing === 'processing'}
                >{processing === 'processed' 
                    ? <>
                        <DoneIcon />
                        <Typography>{'purchased'}</Typography>
                    </>
                    : 'purchase'
                    }
                </LoadingButton>
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
            description: 'Learn how to make authentic pizza at home using simple, healthy ingredients and easy techniques. Start with the internationally loved New York style pizza coated in a thick layer of cheese, followed by the traditional Italian Neopolitan style pizza.',
            price: '80',
            image: 'https://twomagpiesbakery.co.uk/wp-content/uploads/2020/10/greenman.jpg'
        },
        {
            name: 'Bread Basics',
            description: 'Learn how to make a variety of breads including white loaves, baguettes, and pretzels. We will start with the basics of mixing, kneading and shaping bread before moving onto more exotic flavours and ingredients.',
            price: '95',
            image: 'https://cdn.shopify.com/s/files/1/1165/4656/products/Beginner_Bread_Making_5000x.jpg?v=1462957625'
        },
        {
            name: 'Croissant Creation',
            description: 'Learn how to make croissants using traditional techniques and delicious ingredients. Once you have mastered this classic pastry, you will be able to use your skills to make many other related pastries such as pains au chocolat and pains aux raisins.',
            price: '62',
            image: 'https://www.breadahead.com/wp/wp-content/uploads/online-baking-banner-4-1.png'
        },
        {
            name: 'Eclair Essentials',
            description: 'Learn how to make choux pastry in two of its many forms. We will create light, delicate eclairs and profiteroles filled with a rich crème pâtissière or cream and glaze with one or more of our flavours such as raspberry, lemon, chocolate, and salted caramel.',
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

    // THe
    const pagecontent = `Learn essential baking skills at our masterclasses held by professional Bean and Brew bakers.
    All ingredients and equipment are provided, however we reccomend bringing containers to take your creations home with you at the end of the day.`;
    // Remove leading and trailing whitespace & split into array for mapping in display
    const pagecontentArray = pagecontent.split('\n').map(desc => desc.trim()); 

    return <div className="h-screen w-screen bg-background bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Learn to Bake</Typography>
        {pagecontentArray.map(desc => <Typography color='white' variant='h6'>{desc}</Typography>)}
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
