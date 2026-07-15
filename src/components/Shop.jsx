import { useState, useEffect } from "react"

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {

       /* async function fetchData() {
            const responses = await Promise.all([fetch('https://dummyjson.com/products/category/womens-dresses'),
                fetch('https://dummyjson.com/products/category/womens-bags'),
                fetch('https://dummyjson.com/products/category/womens-shoes'),
        ])

        console.log(responses);

        const data = await Promise.all(
            responses.map((res) => res.json());

        );

        const products = data.flatMap((d) => d.products)
        */
      
        setTimeout(() => {
            setLoading(true);
            const dresses = fetch('https://dummyjson.com/products/category/womens-dresses');
            const bags = fetch('https://dummyjson.com/products/category/womens-bags');
            const shoes = fetch('https://dummyjson.com/products/category/womens-shoes');
            const jewellery = fetch('https://dummyjson.com/products/category/womens-jewellery');
            const watches = fetch('https://dummyjson.com/products/category/womens-watches')

            Promise.all([dresses, bags, shoes, jewellery, watches]).then((responses) => {
            return Promise.all(responses.map((res) => {
                    if (!res.ok) {
                        throw new Error('An error occured');
                    }
                    return res.json();

                }))
                
                
            }) 

            .then((data) => {
            const products = data.flatMap((d) => d.products)
                console.log(products);
                setProducts(products);
                setError(null);

                
            })
            
            .catch((error) => {
                setError(error);
                setProducts([]);
                
            })
            .finally(() => setLoading(false));
                

            }, 1000)
            
    }, [])

    if (loading) return <p>loading ...</p>

    if (error) return <p>Network error occured</p>

    return (
        <div>
           { products.map((product) => {
                return <div key={product.id}>
                    <p>{product.title}</p>
                    <img src={product.images[0]} alt={product.description} width={200} />
                    <div className="quantity">
                        <label htmlFor={product.title}>Enter quantity</label>
                        <input type="number" id={product.title} name={product.title} />
                        <div>
                            <div>
                                
                                <input type="button" id="increament" value="+"/>
 
                                <input type="button" id="decreament" value="-"/>
                            </div>
                            <div>
                                <p>{product.price}$</p>
                                <button>Add to cart</button>
                            </div>
                            
                        </div>
                       
                    </div>


                </div>
            })}
        </div>
    )
}