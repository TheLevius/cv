import React from 'react';
import styles from './Represent4.module.css'

const Represent4 = () => {
    return(
        <div className="Represent4 block dark1">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h5>Рассматриваю варианты удаленной работы</h5>
                    <button className={styles._hireMe}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
};

export default Represent4;