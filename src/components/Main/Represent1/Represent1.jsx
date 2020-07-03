import React from 'react';
import styles from './Represent1.module.css';
import avatarCv from './../../../img/avatarCv.jpg';

const Represent1 = () => {
    return (
        <div className="Represent1 block dark2">
            <div className={styles._container}>
                <div className={styles._box}>
                    <div className={styles._cell}>
                        <h5>Привет, меня зовут Никита Левицкий, я front-end разработчик</h5>
                    </div>
                    <div className={styles._cell}>
                        <div className={styles._imgBox}>
                            <img src={avatarCv} alt="avatar CV" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Represent1;