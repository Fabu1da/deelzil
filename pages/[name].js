import { useRouter } from "next/router"

const Name = () =>{
    const router = useRouter();
    const query = router.query;
    console.log(query);
    return <div>welcome { query.name }</div>
}

export default Name