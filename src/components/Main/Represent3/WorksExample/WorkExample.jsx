import React from 'react';
import styles from './WorkExample.module.css';

const WorkExamples = (props) => {
    return (
        <div className="WorkExamples block">
            <div className={styles._container}>
                <div className={styles._imgWatch}>
                    <button className={styles._btnWatch}>Смотреть</button>
                </div>
                <h3 className={styles._nameExample}>{props.workExamples.workName}</h3>
                <p className={styles._discrExample}>
                    {props.workExamples.shortDescription}
                </p>
            </div>
        </div>
    );
}

export default WorkExamples;