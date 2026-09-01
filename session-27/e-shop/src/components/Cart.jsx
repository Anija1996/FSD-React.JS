function Cart({name , price , inStock}){
    return(
        <>
            <h5>{name}</h5>
            <p>Price : {price}</p>
            <p>{inStock ? "Is Stock" : "Out of Stock"}</p>
        </>
    )
}
export default Cart;