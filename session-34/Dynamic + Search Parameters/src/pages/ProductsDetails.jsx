import { useParams,useSearchParams } from "react-router-dom";

export default function ProductsDetails(){
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const color = searchParams.get("color");
    const size = searchParams.get("size");

    return(
        <>
            <h1>Product Page</h1>
            <p>User ID : {id}</p>
            <p>Color : {color}</p>
            <p>Size : {size}</p>
        </>
    )

}