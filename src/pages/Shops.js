import { Typography } from "@mui/material";
import React from 'react';
import Map from "../components/GoogleMaps";
import Menu from "../components/Menu";
import Products from '../data/Products';

function GetMenuItems(location, category) {
    let applicableItems = [];
    for (const product of Products) {
        if (product.availability.includes(location) && product.type === category) {
            applicableItems.push(product);
        }
    }
    return applicableItems
}

export default function Shops() {
    return <div className="h-full w-full bg-coffee-mug bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Our Locations</Typography>
        <Typography color='white' variant='h6'>Where are your local Bean and Brew coffee shops?</Typography>
        <Map />

        <Typography color='white' variant='h2'>In Store Menu</Typography>
        <Menu items={GetMenuItems('shop', 'drink')} />
        <Menu items={GetMenuItems('shop', 'food')} />
    </div>
}
