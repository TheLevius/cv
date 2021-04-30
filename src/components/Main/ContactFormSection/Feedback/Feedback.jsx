import React from 'react';
import styles from './Feedback.module.scss';
import Button from '../../../../common/components/button/Button';

const Feedback = props => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <form className={styles.form}>
                        <input type="text" className={styles.first} placeholder="Name"/>
                        <input type="text" className={styles.second} placeholder="E-mail"/>
                        <textarea className={styles.comment} placeholder="оставьте свой комментарий"/>
                        <Button text={'Отправить'} type={'submit'}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback;