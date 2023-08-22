/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath:'/myPage'
    // env:{
    //     API_KEY:"123-XYZ"
    // }

    async headers(){
        return [
            

       
            {source:"/:path*",headers:[{key:'X-Frame-Options',value:'DENY'}]}
           
           
        ]
    },
   
    distDir:'build'
    


    
}

module.exports = nextConfig
