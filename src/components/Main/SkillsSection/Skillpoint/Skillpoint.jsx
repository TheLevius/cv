import React from 'react';
import styles from './Skillpoint.module.scss';
import {Icon} from '@iconify/react';


const Skillpoint = props => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.imgBox}>
                    <div className={styles.skillHolder}>
                        <Icon className={styles.skillIcon} icon={props.skills.skillIcon}/>
                    </div>
                </div>
                <h3 className={styles.skillName}>{props.skills.skill || 'SKILL'}</h3>
                <p className={styles.skillDetails}>
                    {props.skills.description}
                </p>
            </div>
        </div>
    );
}

export default Skillpoint;