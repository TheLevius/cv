import React from 'react';
import styles from './HeaderH2.module.css';

const HeaderH2 = (props) => {
    return (
        <>
            <h2 className={styles._sectionHeader}>{props.headerText}</h2>
            <hr className={styles._sectionHr} />
        </>
    )
}

export default HeaderH2;