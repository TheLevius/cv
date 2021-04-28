import React from 'react';
import styles from './Header.module.scss';
import Navigation from "./Navigation/Navigtaion";

const Header = () => {
    return (
        <header className="Header block">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Navigation/>
                </div>
            </div>
        </header>
    );
}

export default Header;