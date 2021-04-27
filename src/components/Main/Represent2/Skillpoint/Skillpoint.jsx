import React from 'react';
import styles from './Skillpoint.module.css';

const Skillpoint = (props) => {
    return(
        <div className={`Skillpoint block ${styles._basis}`}>
            <div className={styles._container}>
                <div className={styles._imgBox}>
                    <img src="#" alt="skills img" />
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