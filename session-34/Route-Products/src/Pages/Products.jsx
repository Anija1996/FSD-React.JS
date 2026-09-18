import { useParams } from "react-router-dom";

export default function Products(){
    const {id} = useParams();
    const products = [
        { id: 1, name: "Bridal Set", price: 5000 },
        { id: 2, name: "Gold Necklace", price: 8000 },
        { id: 3, name: "Diamond Ring", price: 12000 }
    ];
    const product = products.find((item)=>item.id===Number(id));
    if (!product) {
    return <h2>Product not found</h2>;
}
    return(
        <>
        <h1>Product Details</h1>
        <p>Product {product.name}</p>
        </>
    )
}