export default async function getBlogPost(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/2/${id}`) 

    if(!res.ok){
        throw new Error('Error featching posts')
    }
    return res.json()

 }

 