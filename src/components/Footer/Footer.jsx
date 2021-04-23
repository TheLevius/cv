import React from 'react';
import styles from './Footer.module.css';
import Social from "./Social/Social";

const Footer = () => {
    return(
        <footer className="Footer block dark1">
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <div className={styles._box}>
                        <h5>Никита Левицкий</h5>
                        <div className={styles._socialWrapper}>
                            <Social/>
                            <Social/>
                            <Social/>
                            <Social/>
                            <Social/>
                        </div>
                        <h6>© 2020 MIT</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;