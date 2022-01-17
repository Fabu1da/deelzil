import axios from "axios"

import { useState, useEffect } from "react"


const url = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"

    const NewsContent = () =>{
        const [Blogpost, setPost] = useState([]);


        useEffect(()=>{
        const newsList = async () => {
            const response = await axios.get(url);
            //console.log(response)


            const promises = []
            response.data.forEach(result=>{
                promises.push(result)
            });
            const responses = await Promise.all(promises);
            console.log(responses)
            const UniData = responses.map(r=>{
                
                return {
                    thumbnail : r.jetpack_featured_media_url,
                   title : r.title.rendered
                }
            })

            setPost(UniData);
        }

       
        newsList();
    }, [])

   
    return( Blogpost.map( (post) =>{
       
        return(
            <div className="transition ease-in-out delay-150 duration-300 hover:scale-125 hover:z-10 bg-white shadow-2xl ">
                <div className="h-40 overflow-hidden ">
                    <img src={post.thumbnail} className="scale-125"/>
                </div>
                
                <p className="p-2">{ post.title }</p>
               
            </div>
            
        )
    
    })
    )
}

export default NewsContent