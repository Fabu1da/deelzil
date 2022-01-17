import NewsLst from "./news-api"

function HomePage() {
    return(
    <div className="container mx-auto">
        
       <h1>Welcome to Next.js!</h1> 

        <div className="grid grid-cols-1 grid-cols-6 gap-4">
            <NewsLst />
        </div>

    </div>
    )
  }
  
  export default HomePage