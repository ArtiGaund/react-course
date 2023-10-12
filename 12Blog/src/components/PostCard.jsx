import React from 'react';
// services will provide information, we are taking this from here bz its not available in state, we need to add Query 
// and service will add that query
import appwriteService from '../appwrite/config'
// card should be clickable thats why link is used
import { Link } from 'react-router-dom' 
// appwrite use $id
import {
Card,
CardHeader,
CardBody,
CardFooter,
Typography,
HeartIcon,
} from '@material-tailwind/react'
function PostCard({ $id, title, featuredImage }){
    return (
        <Link to={`/post/${$id}`}>
            <Card className='max-w-[24rem] overflow-hidden h-full'>
                <CardHeader
                floated={true}
                shadow={true}
                color='transparent'
                className='m-0 rounded-none'
                >
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}/>
                </CardHeader>
                <CardBody>
                    <Typography variant='h4' color='blue-gray'>
                        {title}
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center -space-x-3">
                        <Typography className="font-normal">Upload time</Typography>
                     </div>
                     {/* <Typography> */}
                        {/* <HeartIcon className='h-[18px] w-[18px]'/> */}
                     {/* </Typography> */}
               </CardFooter>
            </Card>
        </Link>
    );
};

export default PostCard;