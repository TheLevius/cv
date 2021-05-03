import React from 'react';
import styles from './Feedback.module.scss';
import Button from '../../../../common/components/button/Button';
import Fade from 'react-reveal/Fade'

const Feedback = props => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>

                        <form className={styles.form}>
                            <Fade bottom duration={600} delay={200}>
                            <input type="text" className={styles.first} placeholder="Name" id={'name'}/>
                            </Fade>
                            <Fade bottom duration={600} delay={350}>
                            <input type="text" className={styles.second} placeholder="E-mail" id={'e-mail'}/>
                            </Fade>
                            <Fade bottom duration={600} delay={500}>
                            <textarea className={styles.comment} placeholder="Оставьте свой комментарий"/>
                            </Fade>
                            <Fade bottom duration={600} delay={550}>
                            <Button text={'Отправить'} type={'submit'}/>
                            </Fade>
                        </form>

                </div>
            </div>
        </div>
    )
}

export default Feedback;