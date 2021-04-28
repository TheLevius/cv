import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = props => {
    const items = [
        {item: 'Главная', href: '#'},
        {item:'Скилы', href: '#'},
        {item:'Работы', href: '#'},
        {item:'Контакты', href: '#'}
        ];
    const listItems = items.map((el, i) => {
        return (
            <li className={styles.item} key={'' + i}>
                <a className={styles.linkcell} href={el.href}>
                    {el.item}
                </a>
            </li>
        )
    });
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.container}>
                {listItems}
            </ul>
        </nav>
    )
};


export default Navigation;