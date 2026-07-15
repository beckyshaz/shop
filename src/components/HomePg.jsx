import hero from  "../assets/hero.jpg"
import clothes from "../assets/clothes.jpg"
import girl from "../assets/girl.jpg"
import shopping from "../assets/shopping.jpg"

function HomePg() {
    return (
        <div>
            <h1>Welcome to our shop</h1>
            <div>
            <img src={hero} alt="store image" width={200} />
            <img src={clothes} alt="clothes image" width={200} />
            <img src={girl} alt="image of a girl wearing fancy sweatpants and jacket that match" width={200} />
            <img src={ shopping } alt="image of a woman carrying shopping bags and looking glamourus" width={200} />
            </div>
        </div>
    )
}

export default HomePg;