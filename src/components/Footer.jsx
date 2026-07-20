import styles from "./Footer.module.css"
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.about}>
                <h3>About us</h3>
                <p><span>Shaz Fashionistar </span>is an online store with the coolest and stylish street 
                    wares from designers and brands all over the world and also from one of 
                    our very own brand label <span>SFS</span>.Always making you 
                    look fabuluouse and confident in your own taste and style.</p>
            </div>
            
                <div className={styles.contact}>
                <h3>Contuct Us</h3>
                <p>Email: <a href="">shazfashionistar@gmail.com</a></p>
                <p>Phone: +2540000000</p>
            </div>

            <div className={styles.follow}>
                <h3>Follow us</h3>
                <div className={styles.followIcons}>
                    <svg viewBox="0 0 128 128" className={styles.svg}>
                    <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                    
                    <svg viewBox="0 0 128 128" className={styles.svg}>
                    <path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z" fill="#000" style={{strokeWidth:.104373}}></path>
                    </svg>

                    
                    <svg viewBox="0 0 128 128"  className={styles.svg}>
                    <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                    </svg>
                </div>
            </div>
        </div>

        
    )
}