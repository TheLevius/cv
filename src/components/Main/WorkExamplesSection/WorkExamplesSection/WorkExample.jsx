import React from 'react';
import styles from './WorkExampleSass.module.scss'

const WorkExamples = (props) => {

    return (
        <div className="WorkExamples block">
            <div className={styles.container}>
                <div className={styles.imgWatch} style={{backgroundImage: `url(${props.workExamples.img})`}}>
                    <button className={styles.btnWatch}>Смотреть</button>
                </div>
                <div className={styles.description}>
                    <h3>{props.workExamples.workName}</h3>
                    <p>
                        {props.workExamples.shortDescription}
                    </p>
                    <a href={props.workExamples.workReadMoreLink}>
                        <span>Read More</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default WorkExamples;