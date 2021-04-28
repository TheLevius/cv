import React from 'react';
import styles from './Feedback.module.scss';

const Feedback = props => {
    return(
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <input type="text" className={styles.first} placeholder="Name"/>
                <input type="text" className={styles.second} placeholder="E-mail"/>
                <textarea className={styles.comment} placeholder="оставьте свой комментарий"></textarea>
                <button type="submit" className={styles.submit}>Отправить</button>
            </form>
        </div>
    )
}

export default Feedback;