import React from 'react';
import styles from './ContactFormSection.module.scss'
import Feedback from "./Feedback/Feedback";
import SectionHeader from '../../../common/components/headers/SectionHeader/SectionHeader';

const ContactFormSection = props => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <SectionHeader headerText={'Contacts'}/>
                    <Feedback/>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;