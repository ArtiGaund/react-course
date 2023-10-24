import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost(){
    const [ post, setPost ] = useState(null)
    //slug is needed, we need to take out values from
    const { slug } = useParams()
    const navigate = useNavigate()

    // to bring all values so we need useEffect, if change in slug
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug)
            .then((post) => {
                if(post){
                    setPost(post)
                }
            })
        } else{
            navigate('/')
        }
    },[ slug, navigate ])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
};



export default EditPost;