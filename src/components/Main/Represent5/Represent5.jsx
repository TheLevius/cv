import React from 'react';
import styles from './Represent5.module.css'
import Feedback from "./Feedback/Feedback";

const Represent5 = () => {
    return(
        <div className="Represent5 block dark2">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h5 className={styles._}>Контакты</h5>
                    <Feedback/>
                </div>
            </div>
        </div>
    );
};

export default Represent5;