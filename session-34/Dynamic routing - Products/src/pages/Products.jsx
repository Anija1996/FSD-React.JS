import { useParams } from "react-router-dom";

export default function Products(){
    const {id} = useParams();
    const products = [
        {id:1,name:"Laptop",price:"Rs. 75,000"},
        {id:2, name:"Smartphone" , price:"Rs.35000"},
        {id:3, name:"Headphones", price:"Rs.5000"},
        {id:4,name:"Smart Watch",price:"Rs.3000"}
    ]
    const product = products.find((item)=>item.id===Number(id));
    if(!product){
        return<p>Product Not Found</p>
    }

    return(
        <>
        <h4>Product Name: {product.name}</h4>
        <p>Price: {product.price}</p>
        </>
    )
}