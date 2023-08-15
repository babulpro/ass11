import getBlogPost from "@/lib/getblogpost";

 

 export default async function SingleBlog({params}){

     const id = params.id;
     const post =await getBlogPost(id)

    return(
        <div>
            <section className=" mt-11">
                 <h1 className="underline uppercase text-yellow-400 mb-5">{post.title}</h1>
                 <div className='text-red-400 mb-10'>
                   {post.body}
                 </div>

            </section>
        </div>
    )
 }