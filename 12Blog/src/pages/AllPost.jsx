import React, { useState, useEffect } from 'react';
// appwrite services
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'


function AllPost(){
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
    },[])

    appwriteService.getPosts([])
    .then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
    
    return (
        <div className='w-full py-8'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4 mb-6 p-0">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
            </div>
            
            <Container>
                <div className='flex flex-wrap items-stretch mx-4 mt-5'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'> 
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
                
            </Container>
        </div>
    );
};



export default AllPost;