

export function CreateProductInCart({cart, onRemoveFromCart}) {
    console.log(cart);

    
    return (
        <div>
           {cart && cart.map((c) => {
                return <div key={c.id}>
                    <p>{c.title}</p>
                    <img src={c.images[0]} alt={c.description} width={200} />
                    <div>
                        <p>Price: {c.price}$</p>
                        <button onClick={() => onRemoveFromCart(c.id)}>Remove from cart</button>
                    </div>
                </div>
            })}
        </div>
    )
    
}