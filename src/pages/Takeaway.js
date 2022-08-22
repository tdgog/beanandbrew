import { Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';

function Card(props){
    let navigate = useNavigate();
    const image = props.image || '';
    const color = props.color || 'bg-bs';
    const goto = props.goto || null;
    return <div
        className={`h-44 w-96 ${color} bg-cover rounded-lg overflow-hidden flex justify-center items-center cursor-pointer`}
        onClick={() => {
            navigate(`/redirect/${encodeURIComponent(goto)}`);
        }}
    >
        <img src={image} className='h-52 w-52' />
    </div>
}

export default function Takeaway(){
    return <div className="h-screen w-screen bg-background bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Takeaways</Typography>
        <Typography color='white' variant='h6'>All of our products are available for takeaway, just ask in store</Typography>
        <Typography color='white' variant='h6'>Alternatively, order Bean and Brew directly to your door with our trusted delivery partners</Typography>

        <div className='h-cardheight w-cardwidth mt-5 grid grid-cols-2 gap-2'>
            <Card 
                image='./DeliveryCompanies/Deliveroo.png'
                color='bg-[#00CDBC]' 
                goto='https://deliveroo.co.uk/'
            />
            <Card 
                image='./DeliveryCompanies/justeat.png'
                color='bg-[#EF7204]' 
                goto='https://www.just-eat.co.uk/'
            />
            <Card 
                image='./DeliveryCompanies/ubereats.png'
                color='bg-[#142328]' 
                goto='https://www.ubereats.com/gb'
            />
            <Card 
                image='./DeliveryCompanies/foodhub.png'
                color='bg-[#D82927]' 
                goto='https://foodhub.co.uk/'
            />
        </div>
    </div>
}
