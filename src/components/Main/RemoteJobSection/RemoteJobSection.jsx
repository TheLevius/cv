import React from 'react';
import styles from './RemoteJobSection.module.scss'
import SectionHeader from "../../../common/components/headers/SectionHeader/SectionHeader";
import Button from '../../../common/components/button/Button';
import Fade from 'react-reveal/Fade';

const RemoteJobSection = props => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Fade bottom delay={300}>
                        <SectionHeader headerText={'Рассматриваю варианты удаленной работы'}/>
                    </Fade>
                    <Fade bottom>
                        <Button text={'Hire me'}/>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default RemoteJobSection;