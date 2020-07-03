import React from 'react';
import styles from './Feedback.module.css';

const Feedback = () => {
    return(
        <div className="Feedback block">
            <form className={styles._form}>
                <input type="text" className={styles._first} placeholder="Name"/>
                <input type="text" className={styles._second} placeholder="E-mail"/>
                <textarea className={styles._comment} placeholder="оставьте свой комментарий"></textarea>
                <button type="submit" className={styles._submit}>Отправить</button>
            </form>
        </div>
    )
}

export default Feedback;