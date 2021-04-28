import React from 'react';
import styles from './PhotoRepresentSection.module.scss';
import avatarCv from './../../../img/avatarCv.jpg';

const PhotoRepresentSection = props => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.cell}>
                        <h1>Привет, меня зовут Никита Левицкий, <br />я front-end разработчик</h1>
                    </div>
                    <div className={styles.cell}>
                        <div className={styles.imgBox}>
                            <img src={avatarCv} alt="avatar CV" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoRepresentSection;