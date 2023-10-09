import React from 'react';
// services will provide information, we are taking this from here bz its not available in state, we need to add Query 
// and service will add that query
import appwriteService from '../appwrite/config'
// card should be clickable thats why link is used
import { Link } from 'react-router-dom' 
// appwrite use $id
function PostCard({ $id, title, featuredImage }){
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 '>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                    className='rounded-xl'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
};



export default PostCard;