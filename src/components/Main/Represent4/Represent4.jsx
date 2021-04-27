import React from 'react';
import styles from './Represent4.module.css'
import HeaderH2 from "../../common/HeaderH2/HeaderH2";

const Represent4 = () => {
    return(
        <div className="Represent4 block">
            <div className={styles._container}>
                <div className={styles._box}>
                    <HeaderH2 headerText={'Рассматриваю варианты удаленной работы'}/>
                    <button className={styles._hireMe}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
};

export default Represent4;