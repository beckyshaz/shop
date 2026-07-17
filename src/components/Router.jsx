import App from "../App";
import HomePg from "./HomePg";
import Shop from "./Shop";
import Cart from "./Cart"


const routes = [
    { 
        path: "/", 
        element: <App />,
        children: [
            {
                index: true, 
                element: <HomePg />,
            },

            {
                path: "shop", 
                element: <Shop />,
            },

            {
                path: "cart", 
                element: <Cart />,
            }

        ]
    }
]

export default routes;