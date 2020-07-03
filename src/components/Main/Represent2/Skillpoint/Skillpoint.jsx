import React from 'react';
import styles from './Skillpoint.module.css';

const Skillpoint = () => {
    return(
        <div className="Skillpoint block">
            <div className={styles._container}>
                <div className={styles._imgBox}>
                    <img src="#" alt="skills img" />
                </div>
                <h5 className={styles._skillName}>SKILL</h5>
                <p className={styles._skillDetails}>
                    Подробное описание навыка
                </p>
            </div>
        </div>
    );
}

export default Skillpoint;