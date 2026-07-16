import { useState } from "react"

export default function Shop({products, onAddToCart}) {

    const [quantity, setQuantity] = useState(0);

    function increaseInputHandler() {
        setQuantity((quantity) => quantity + 1)
        
    }

    function decreaseInputHandler() {
        setQuantity((quantity) => quantity - 1)
    }
  
    return (
        <div>
           { products.map((product) => {
                return <div key={product.id}>
                    <p>{product.title}</p>
                    <img src={product.images[0]} alt={product.description} width={200} />
                    <div className="quantity">
                        <label htmlFor={product.title}>Enter quantity</label>
                        <input type="number" id={product.title} name={product.title} value={quantity} 
                        onChange={(event) => setQuantity(event.currentTarget.value)} />
                        <div>
                            <div>
                                
                                <input type="button" id="increament" value="+" onClick={increaseInputHandler}/>
 
                                <input type="button" id="decreament" value="-" onClick={decreaseInputHandler}/>
                            </div>
                            <div>
                                <p>Price: {product.price}$</p>
                                <button onClick={() => onAddToCart(product.id)}>Add to cart</button>
                            </div>
                            
                        </div>
                       
                    </div>


                </div>
            })}
        </div>
    )
}