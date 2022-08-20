import { Typography, Card, CardMedia, CardContent, Divider, Tooltip, Popover, CardActions, Button } from "@mui/material";
import React, { useState } from 'react';

function Allergens({ size, allergens }) {
    return <>
        <div className='flex flex-row'>
            {allergens.mayContain.map((allergen, key) => {
                const path = `/allergens/${allergen}/PNG/${allergen}_amber_${size}x${size}.png`;

                return <Tooltip key={key} title={`May contain ${allergen}`}>
                    <img src={path} alt={`May contain ${allergen}`} className='h-10' />
                </Tooltip>
            })}
        </div>
        <div className='flex flex-row'>
            {allergens.contains.map((allergen, key) => {
                const path = `/allergens/${allergen}/PNG/${allergen}_red_${size}x${size}.png`;

                return <Tooltip key={key} title={`Contains ${allergen}`}>
                    <img src={path} alt={`Contains ${allergen}`} className='h-10' />
                </Tooltip>
            })}
        </div>
    </>
}

function MenuCard({ image, name, description, calories, allergens, isVegan, isVegetarian }) {
    // Set variable to 'Vegan', 'Vegetarian', or '' depending on the product's suitability
    const suitability = isVegan ? 'Vegan' : (isVegetarian ? 'Vegetarian' : '');

    // Cutoff name if it's too long
    const reducedName = name.substr(0, 13);
    const nameDots = reducedName === name ? '' : '...';

    // Popover to expand description cutoff
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;

    // Split description into list of strings at most 30 chars long but only separated at spaces
    const chunks = description.match(/.{1,30}(\s|$)/g);

    return <Card className='w-60'>
        <CardMedia
            component='img'
            sx={{ height: '10rem' }}
            image={image}
            alt='image'
        />
        <CardContent className='bg-dgray flex flex-col' sx={{ height: '17rem' }}>
            <div className='flex flex-row'>
                <Typography
                    color='white'
                    variant='h5'
                    component='div'
                    className='flex flex-grow'
                >{reducedName}{nameDots}</Typography>
                {suitability && <Tooltip title={suitability}>
                    <img src='/Vegetarian.png' className='h-6' />
                </Tooltip>}
            </div>
            <Typography color='white' variant='body1'>{calories} ckal / serving</Typography>
            <Typography color='white' variant='body2' sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 6
            }}>{description}</Typography>
            {/* TODO: Make background colour dgray (#282c34) */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => { setAnchorEl(null); }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Typography className='p-2' variant='body1'>{name}</Typography>
                {chunks.map((chunk, key) => <Typography key={key} className='px-2' variant='body2'>{chunk}</Typography>)}
            </Popover>

            <div className='flex flex-col grow justify-end'>
                <div className=''>
                    <div className='mt-2' />
                    {/* TODO: Make this disappear if no allergens */}
                    <Divider className='bg-white m-8' />
                    <div className='mb-2' />

                    <Allergens size={50} allergens={allergens} />
                </div>
            </div>

            <div className='mt-2' />
            <Divider className='bg-white m-8' />
        </CardContent>
        <CardActions className='bg-dgray flex justify-center content-top'>
            <Button
                size="small"
                sx={{
                    color: 'white'
                }}
                onClick={(event) => { setAnchorEl(event.currentTarget) }}
            >More Information</Button>
        </CardActions>
    </Card>
}

export default function Menu({ items }) {
    return <div className='flex flex-row flex-wrap w-full'>
        {items.map((item, key) =>
            <div key={key} className='mx-2 my-2'><MenuCard
                image={item.image}
                name={item.name}
                description={item.description}
                calories={item.calories}
                allergens={item.allergens}
                isVegetarian={item.isVegetarian}
                isVegan={item.isVegan}
            /></div>
        )}
    </div>
}
