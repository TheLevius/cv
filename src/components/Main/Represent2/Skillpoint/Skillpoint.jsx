import React from 'react';
import styles from './Skillpoint.module.css';
import {Icon} from '@iconify/react';


const Skillpoint = (props) => {
    return(
        <div className={`Skillpoint block ${styles._basis}`}>
            <div className={styles._container}>
                <div className={styles._imgBox}>
                    <div className={styles._skillHolder}>
                        <Icon className={styles._skillIcon} icon={props.skills.skillIcon}/>
                    </div>
                </div>
                <h3 className={styles._skillName}>{props.skills.skill || 'SKILL'}</h3>
                <p className={styles._skillDetails}>
                    {props.skills.description}
                </p>
            </div>
        </div>
    );
}

export default Skillpoint;