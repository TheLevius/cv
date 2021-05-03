import React from 'react';
import styles from './ContactFormSection.module.scss'
import Feedback from "./Feedback/Feedback";
import SectionHeader from '../../../common/components/headers/SectionHeader/SectionHeader';
import Fade from 'react-reveal/Fade';

const ContactFormSection = props => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Fade bottom delay={300}>
                    <SectionHeader headerText={'Contacts'}/>
                    </Fade>
                    <Feedback/>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;