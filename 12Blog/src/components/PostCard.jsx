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
Button,
} from '@material-tailwind/react'
function PostCard({ $id, title, featuredImage }){
    return (
        <Link to={`/post/${$id}`}>
            <Card className="mt-6 w-96 overflow-hidden rounded">
            {/* <div style={{ margin: '10px'}}> */}
                <CardHeader
                color="blue-gray" className="relative h-56 mt-5"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}
                >
                    
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                   
                   />
                   
                </CardHeader>
                {/* </div> */}
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="flex items-center">
                        <div className='w-full md:w-2/3'>
                            <Button>Read More</Button>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <Typography className="font-normal">Upload time</Typography>
                        </div>
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