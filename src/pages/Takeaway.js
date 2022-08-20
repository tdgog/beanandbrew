import { Typography } from "@mui/material"

function Card(props){
    const image = props.image || '';
    const color = props.color || 'bg-bs';
    return <div className={`h-44 w-96 ${color} bg-cover rounded-lg overflow-hidden flex justify-center items-center`}>
        <img src={image} className='h-52 w-52' />
    </div>
}

export default function Takeaway(){
    return <div className="h-screen w-screen bg-background bg-cover bg-fixed p-5 pt-20">
        <Typography color='white' variant='h2'>Takeaways</Typography>
        <Typography color='white' variant='h6'>desc</Typography>

        <Card 
            image='./Deliveroo.png'
            color='bg-[#00CDBC]'
        />
    </div>
}
