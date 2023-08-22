
const getAllPosts =async () => {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-list/2')
    
    if(!res.ok){
        throw new Error('Error posts')
    }
    return res.json()
     
};

export default getAllPosts;