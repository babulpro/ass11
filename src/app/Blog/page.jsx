import getAllPosts from "@/lib/allReq"
import Link from "next/link"

 export default async function Blog(){

    const posts =await getAllPosts()

    return(
        <div >
            <section className="mt-11">
                 <h1 className="uppercase text-red-400 underline mb-5">Blog post </h1>
                 <div>
                    {posts.map((value)=>{
                        return(
                            <p className="hover:text-red-400 mb-3" key={value.id} ><Link href={`/Blog/${value.id}`}>{value.id}.{value.title}</Link> </p>
                        )
                    })}
                 </div>

            </section>
        </div>
    )
 }