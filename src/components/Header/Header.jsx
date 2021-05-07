import React, {useEffect, useRef, useState} from 'react';
import styles from './Header.module.scss';
import Navigation from "./Navigation/Navigtaion";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {

    const [dimension, setDimension] = useState(window.innerWidth)

    const handlerLog = () => {

        setDimension(window.innerWidth);

    }

    useEffect(()=>{

        window.addEventListener('resize', handlerLog);

        console.log('подписали ' + dimension + 'px')

            return ()=> window.removeEventListener('resize', handlerLog)

    }, []);

    const [burgerNav, setBurgerNav] = useState(false);

    const burgerHandler = e => setBurgerNav(prev => !prev);

    return (
        <header className={styles.wrapper}>
            {console.log(' значение окна' + dimension)}
            {dimension < 960 && (
                <button className={styles.burgerBtn} onClick={burgerHandler}>
                    {burgerNav ?  <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
                </button>
            )}
            <div className={burgerNav ? `${styles.container} ${styles.containerBurger}` : `${styles.container}`}>
                <Navigation burgerNav={burgerNav} burgerHandler={burgerHandler}/>
            </div>
        </header>
    );
}

export default Header;