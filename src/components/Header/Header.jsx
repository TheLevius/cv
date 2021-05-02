import React from 'react';
import styles from './Header.module.scss';
import Navigation from "./Navigation/Navigtaion";

const Header = () => {

    const onClickDoItBlur = e => e.target.blur();

    return (
        <header className="Header block">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Navigation onClickDoItBlur={onClickDoItBlur}/>
                </div>
            </div>
        </header>
    );
}

export default Header;