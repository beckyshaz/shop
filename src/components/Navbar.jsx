
import { Link } from "react-router"
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                <li className={styles.list}><Link to="home" className={styles.link}>Home</Link></li>
                <li className={styles.list}><Link to="shop" className={styles.link}>Shop</Link></li>
                <li className={styles.list}><Link to="cart" className={styles.link}>Cart</Link></li>
                </ul>
            </nav>

            <div className={styles.welcome}>
                <div>
                    <h1>Welcome to our shop</h1>
                    <p>Discover the latest street ware fashion...</p>
                    <button className={styles.btn}>Shop now!</button>
                </div>
                
            </div>
            
        </header>
    )
}

export default Navbar;