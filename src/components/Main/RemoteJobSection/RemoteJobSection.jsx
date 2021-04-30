import React from 'react';
import styles from './RemoteJobSection.module.scss'
import SectionHeader from "../../../common/components/headers/SectionHeader/SectionHeader";
import Button from '../../../common/components/button/Button';

const RemoteJobSection = props => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <SectionHeader headerText={'Рассматриваю варианты удаленной работы'}/>
                    <Button text={'Hire me'}/>
                </div>
            </div>
        </section>
    );
};

export default RemoteJobSection;