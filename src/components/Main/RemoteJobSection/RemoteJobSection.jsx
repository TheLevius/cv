import React from 'react';
import styles from './RemoteJobSection.module.scss'
import SectionHeader from "../../../common/components/headers/SectionHeader/SectionHeader";

const RemoteJobSection = props => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <SectionHeader headerText={'Рассматриваю варианты удаленной работы'}/>
                    <button className={styles.hireMe}>Нанять меня</button>
                </div>
            </div>
        </section>
    );
};

export default RemoteJobSection;