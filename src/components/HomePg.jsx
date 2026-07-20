
import clothes from "../assets/clothes.jpg"
import girl from "../assets/girl.jpg"
import shopping from "../assets/shopping.jpg"

import styles from "./Home.module.css";

function HomePg() {
    return (
        <div className={styles.homeDiv}>
            <div className={styles.triangle}>
                <h2>Discover Your Style</h2>
                <p className={styles.line1}>
                    Welcome to our shop, where fashion meets comfort and confidence.</p>

                <p className={styles.line2}>Explore our carefully selected collection of women's clothing, stylish bags, 
                    trendy shoes, and beautiful jewelry designed to complement every look. </p>

                <p className={styles.line3}>Whether you're refreshing your wardrobe or searching for the perfect finishing touch, 
                    you'll find pieces that suit every occasion and every style.</p>

                <p className={styles.line4}>Browse our latest collections and discover fashion you'll love to wear every day.</p>
            </div>
           
            <div className={styles.images}>
        
                <div className={styles.imageDiv}>
                    <h3>Trendy styles</h3>
                    <img className={styles.img} src={clothes} alt="clothes image" width={200} />
                </div>
                <div className={`${styles.imageDiv} ${styles.shopping}`}>
                    <h3>Shine with Confidence</h3>
                    <img className={styles.img} src={ shopping } alt="image of a woman carrying 
                    shopping bags and looking glamourus" width={300} />

                    </div>

                <div className={styles.imageDiv}>
                    <h3>Look Fabulous</h3>
                    <img className={styles.img} src={girl} alt="image of a girl wearing fancy sweatpants and jacket that match" width={200} />
                </div>

            </div>
        </div>
    )
}

export default HomePg;