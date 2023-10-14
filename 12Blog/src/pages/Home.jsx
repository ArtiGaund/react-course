import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useNavigate } from 'react-router-dom';




function Home(){
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents) 
            }
        })
    }, [])
    const navigate = useNavigate()
    
    return (
        // <div className='w-full py-8'>
        //     <Container>
        //         <div className='flex flex-wrap'>
        //             {posts.map((post) => (
        //                 <div key={post.$id} className='p-2 w-1/4'>
        //                     <PostCard {...post}/>
        //                 </div>
        //             ))}
        //         </div>
        //     </Container>
        // </div>
        <div className='w-full py-8'>
         <Container>
            <div className='flex flex-wrap'>
                <div className='w-full p-4 md:w-1/4'>
                    <div>
                        <h1 className='text-[#98EC65] font-bold text-[5rem]'>
                            Creative
                        </h1>
                        <h3 className='text-white text-[2rem] font-bold'>Design  studio</h3>
                        <button className='w-[10rem] py-[6px] rounded-3xl bg-[#98EC65] hover:bg-[#81E047] mt-[1rem]'
                        onClick={() => navigate("/all-posts")}>Explore Now</button>
                    </div>
                
                </div>
                {/* <div className='w-full md:w-3/4 flex justify-end -mr-10'>
                <div className='flex flex-wrap'>
                    {posts.slice(0,2).map((post) => (
                        <div key={post.$id} className='p-2 w-1/2 md:w-1/2'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
                </div> */}
            </div>
            </Container>
        </div>
    )
};



export default Home;