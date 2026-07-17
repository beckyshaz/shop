import { useState, useEffect } from "react";

import { Outlet } from "react-router";

import Navbar  from "./components/Navbar";

function App() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cart, setCart] = useState([]);


   function getAddedProduct(id) {
       const productItems = [...products];
       const addedProduct =  productItems.find((product) => product.id === id);
       return addedProduct;

    } 


    function addToCartHandler(id) {
        const addedProduct = getAddedProduct(id);
        setCart((cart) => [...cart, addedProduct])
        
    }

    function getNewCartProducts(id) {
        const productItems = [...cart];
        const newCartProducts =  productItems.filter((product) => product.id !== id);
        return newCartProducts;
 
     } 

    function removeFromCartHandler(id) {
        const newCartProducts = getNewCartProducts(id);
        setCart(newCartProducts)
    }


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

    console.log(cart);

    return (
        <div>
            <Navbar />

            <Outlet context={{addToCartHandler, removeFromCartHandler, cart, products}}  />
           
        </div>
    )
}

export default App;