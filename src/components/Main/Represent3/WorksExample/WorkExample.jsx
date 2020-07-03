import React from 'react';
import styles from './WorkExample.module.css';

const WorkExamples = () => {
    return (
        <div className="WorkExamples block">
            <div className={styles._container}>
                <div className={styles._imgWatch}>
                    <button className={styles._btnWatch}>Смотреть</button>
                </div>
                <h5 className={styles._nameExample}>Название проекта</h5>
                <p className={styles._discrExample}>
                    Краткое описание
                </p>
            </div>
        </div>
    );
}

export default WorkExamples;