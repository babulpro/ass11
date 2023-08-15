import React from 'react';

const getAllPosts =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    
    if(!res.ok){
        throw new Error('Error featching posts')
    }
    return res.json()
     
};

export default getAllPosts;