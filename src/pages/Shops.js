import { Typography } from "@mui/material";
import React from 'react';
import { Map, Marker } from 'pigeon-maps';
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

function MyMap() {
    const coordinates = [51.59776274108624, -0.10994822620511849]
    return <Map height={400} defaultCenter={coordinates} defaultZoom={16}>
        <Marker width={50} anchor={coordinates} />
    </Map>
}

export default function Shops() {
    return <div className="bg-background bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Our Coffee Shops</Typography>
        <Typography color='white' variant='h6'>Where are your local Bean and Brew coffee shops?</Typography>
        <MyMap />

        <Typography color='white' variant='h2'>In Store Menu</Typography>
        <Menu items={GetMenuItems('shop', 'drink')} />
        <Menu items={GetMenuItems('shop', 'food')} />
    </div>
}
