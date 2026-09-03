// export default function Product({name,price,category,brand}){
//    return(
//     <>
//         <h1>Product Name: {name}</h1>
//         <p>Price: ${price}</p>
//         <span>Category: {category}</span>
//         <span>Brand: {brand}</span>
//     </>
// )}

// Task-7 & 8
// export default function Product({name,price}){
//     function handle(){
//         console.log(name+" Selected");
        
//     }
//     return(
//         <>
//             <h4>{name}</h4>
//             <p>${price}</p>
//             <button onClick={handle}>Buy Now</button>
//         </>
//     )
// }


export default function Product({name,price}){

    function handleClick(){
        console.log(name+" Clicked");
        
    }

    return(
        <>
        <h4>{name}</h4>
        <p>{price}</p>
        <button onClick={handleClick}>Buy Now</button>
        </>
    )

}