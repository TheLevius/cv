import React from 'react';
import styles from './Represent3.module.css'
import WorkExamples from "./WorksExample/WorkExample";

const Represent3 = () => {
    return(
        <div className="Represent3 block dark2">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h5>Мои работы</h5>
                    <div className={styles._workWrapper}>
                        <WorkExamples/>
                        <WorkExamples/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Represent3;