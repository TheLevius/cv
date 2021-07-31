import React from 'react';
import styles from './Navigation.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll';

const Navigation = props => {
    const items = [
        {item: 'Главная', href: 'head'},
        {item:'Скилы', href: 'skills'},
        {item:'Работы', href: 'works'},
        {item:'Контакты', href: 'contacts'}
        ];

    const onClickHandle = () => {
        if (props.dimension < 960) {
            props.burgerHandler()
        }
    }

    const listItems = items.map((el) => {
        return (
            <li className={props.burgerNav ? `${styles.item} ${styles.itemBurger}` : `${styles.item}`} key={el.href}>
                <Link
                    className={props.burgerNav ? `${styles.linkcell} ${styles.linkcellBurger}` : `${styles.linkcell}`}
                    activeClass={styles.activeNavItem}
                    to={el.href}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    duration={400}
                    delay={0}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    onClick={onClickHandle}
                >
                    {el.item}
                </Link>
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