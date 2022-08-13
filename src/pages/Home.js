import { Typography } from "@mui/material";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props){
    let navigate = useNavigate();

    const image = props.image || 'bg-bs';
    return <div className={`h-36 w-96 ${image} bg-cover rounded-lg overflow-hidden`}
        onClick={() => {
            navigate(props.goto || 'home');
        }}
    >
        <div className="h-full w-full bg-gradient bg-cover p-2 pr-24">
            {props.children}
        </div>
    </div>
}

export default function Home(){
    return <div className="h-screen w-screen bg-coffee-mug bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Bean and Brew</Typography>
        <div className='h-30 w-full'>
            <Typography display='inline' color='#03b5aa' variant='h5'>This:</Typography>
            <Typography display='inline' color='white' variant='h5'> is a placeholder tagline</Typography>
        </div>
        <br />
        <div className='h-cardheight w-cardwidth mt-24 grid grid-cols-2 gap-2'>
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
    </div>
}
