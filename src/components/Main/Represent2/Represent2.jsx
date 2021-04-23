import React from 'react';
import styles from './Represent2.module.css';
import Skillpoint from './Skillpoint/Skillpoint';

const Represent2 = () => {

    return(
        <div className="Represent2 block dark1">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h5>Мои навыки</h5>
                    <div className={styles._skillsWrapper}>
                        <Skillpoint skill={'REACT'}/>
                        <Skillpoint skill={'REDUX'}/>
                        <Skillpoint skill={'TS/JS'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Represent2;