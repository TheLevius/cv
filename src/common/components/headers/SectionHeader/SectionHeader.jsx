import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = (props) => {
    return (
        <>
            <h2 className={styles.sectionHeader}>{props.headerText}</h2>
            <hr className={styles.sectionSeparator} />
        </>
    )
}

export default SectionHeader;