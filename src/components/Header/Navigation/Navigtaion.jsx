import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    const items = [
        {item: 'Главная', href: '#'},
        {item:'Скилы', href: '#'},
        {item:'Работы', href: '#'},
        {item:'Контакты', href: '#'}
        ];
    const listItems = items.map((el, i) => {
        return (
            <li className={styles._item} key={'' + i}>
                <a className={styles._linkcell} href={el.href}>
                    {el.item}
                </a>
            </li>
        )
    });
    return (
        <nav className="Navigation block">
            <ul className={styles._container}>
                {listItems}
            </ul>
        </nav>
    )
};


export default Navigation;