import { Typography } from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from "../components/Typewriter";
import { Link } from "react-router-dom";
import {
    Facebook,
    Instagram
} from '@mui/icons-material';

function Card(props){
    let navigate = useNavigate();

    const image = props.image || 'bg-bs';
    return <div className={`h-36 w-96 ${image} bg-cover rounded-lg overflow-hidden cursor-pointer`}
        onClick={() => {
            navigate(props.goto || 'home');
        }}
    >
        <div className="h-full w-full bg-gradient bg-cover p-2 pr-24">
            {props.children}
        </div>
    </div>
}

const endings = ['local.', 'fresh.', 'Bean + Brew.'];

export default function Home(){
    let navigate = useNavigate();

    return <div className="h-screen w-screen bg-background bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Bean and Brew</Typography>
        <div className='flex w-full'>
            <Typography display='inline' color='white' variant='h5' sx={{ marginRight: 1 }}>Coffee is better when it's</Typography>
            <Typewriter display='inline' color='#03b5aa' variant='h5'>{endings}</Typewriter>
        </div>
        <div className='h-cardheight w-cardwidth mt-10 grid grid-cols-2 gap-2'>
            <Card image='bg-coffee-shop' goto='shops'>
                <Typography color='white' variant='h4'>Our Coffee Shops</Typography>
                <Typography color='white' variant='h6'>Read our in-store menu and find our store locations</Typography>
            </Card>
            <Card image='bg-restaurant' goto='restaurants'>
                <Typography color='white' variant='h4'>Our Restaurants</Typography>
                <Typography color='white' variant='h6'>Read our in-store menu and find our store locations</Typography>
            </Card>
            <Card image='bg-baking-lesson' goto='lessons'>
                <Typography color='white' variant='h4'>Bakery Lessons</Typography>
                <Typography color='white' variant='h6'>Read our in-store menu and find our store locations</Typography>
            </Card>
            <Card image='bg-takeaway' goto='takeaway'>
                <Typography color='white' variant='h4'>Takeaway</Typography>
                <Typography color='white' variant='h6'>Read our in-store menu and find our store locations</Typography>
            </Card>
        </div>

        <div className='bg-dgray w-full h-24 absolute inset-x-0 bottom-0 p-5 flex justify-end'>
            <div className='flex flex-grow mr-5 flex-col justify-between'>
                <div className='flex flex-grow w-full'>
                    <Link to={`redirect/${encodeURIComponent('https://www.facebook.com/beanandbrewlondon')}`}>
                        <Facebook sx={{ color: 'white', fontSize: 40 }} />
                    </Link>
                    <Link to={`redirect/${encodeURIComponent('https://www.instagram.com/beanandbrewlondon/')}`}>
                        <Instagram sx={{ color: 'white', fontSize: 40 }} />
                    </Link>
                </div>
                <Typography color='white' variant='body2'>© 2022 Bean + Brew</Typography>
            </div>
            <img src='/Logo_white.png' className='h-full' alt='Logo' />
        </div>
    </div>
}
