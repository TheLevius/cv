import React from 'react';
import styles from './Header.module.css';
import Navigation from "./Navigation/Navigtaion";

const Header = () => {
    return (
        <header className="Header block">
            <div className={styles._wrapper}>
                <div className={styles._container}>

                    <Navigation/>
                </div>
            </div>
        </header>
    );
}

export default Header;