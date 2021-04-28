import React from 'react';
import styles from './WorkExamplesSection.module.scss'
import WorkExamples from "./WorkExamplesSection/WorkExample";
import SectionHeader from "../../../common/components/headers/SectionHeader/SectionHeader";
import socialNetworkImg from './../../../assets/images/svg/social-network.svg'
import todoListImg from './../../../assets/images/svg/todo-list.svg';

const WorkExamplesSection = () => {
    const workExamples = [
        {workName: 'Social Network',
            workUrl: '#',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...',
            img: socialNetworkImg,
            workReadMoreLink: '#'},
        {workName: 'Todo List',
            workUrl: '#',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ',
            img: todoListImg,
            workReadMoreLink: '#'}
        ];
    const workExamplesList = workExamples.map((el, i) => {
        return(
            <WorkExamples workExamples={el} key={''+ i} />
        )
    });
    return(
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <SectionHeader headerText={'My Works'}/>
                    <div className={styles.workWrapper}>
                        {workExamplesList}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExamplesSection;