import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className="Navigation block">
            <ul className={styles._container}>
                <li className={styles._item}>
                    <a className={styles._linkcell} href="#">Главная</a>
                </li>
                <li className={styles._item}>
                    <a className={styles._linkcell} href="#">Скилы</a>
                </li>
                <li className={styles._item}>
                    <a className={styles._linkcell} href="#">Работы</a>
                </li>
                <li className={styles._item}>
                    <a className={styles._linkcell} href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    )
};


export default Navigation;