import React from 'react';
import styles from './WorkExampleSass.module.scss'
import Button from '../../../../common/components/button/Button';
import Fade from 'react-reveal/Fade';

const WorkExamples = (props) => {

    return (

            <div className={styles.container}>
                <div className={styles.imgWatch} style={{backgroundImage: `url(${props.workExamples.img})`}}>
                    <Button className={styles.btnWatch} type={'button'} text={'Смотреть'}/>
                </div>
                <Fade bottom duration={props.duration} delay={props.delay}>
                <div className={styles.description}>
                    <h3>{props.workExamples.workName}</h3>
                    <p>
                        {props.workExamples.shortDescription}
                    </p>
                    <a href={props.workExamples.workReadMoreLink}>
                        <span>Read More</span>
                    </a>
                </div>
                </Fade>
            </div>

    );
}

export default WorkExamples;