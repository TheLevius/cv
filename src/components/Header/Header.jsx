import React from 'react';
import styles from './Header.module.scss';
import Navigation from "./Navigation/Navigtaion";

const Header = () => {

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Navigation/>
            </div>
        </header>
    );
}

export default Header;