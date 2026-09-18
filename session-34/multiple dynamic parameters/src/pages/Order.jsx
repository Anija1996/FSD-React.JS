import { useParams } from "react-router-dom";

export default function Order(){
    const {userId,orderId} = useParams();
    return(
        <>
            <h2>Order Page</h2>
            <p>User ID : {userId}</p>
            <p>Order ID : {orderId}</p>

        </>
    )
}