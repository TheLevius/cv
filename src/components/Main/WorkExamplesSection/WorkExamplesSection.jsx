import React, {useState} from 'react';
import styles from './WorkExamplesSection.module.scss'
import WorkExamples from './WorkExamplesSection/WorkExample';
import SectionHeader from '../../../common/components/headers/SectionHeader/SectionHeader';
import socialNetworkImg from './../../../assets/images/svg/social-network.svg'
import todoListImg from './../../../assets/images/svg/todo-list.svg';
import Fade from 'react-reveal/Fade';

const WorkExamplesSection = () => {
    const [workExamples, setWorkExamples] = useState([
        {
            workName: 'Social Network',
            workUrl: 'https://thelevius.github.io/social_network_react',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...',
            img: socialNetworkImg,
            workReadMoreLink: 'https://thelevius.github.io/social_network_react',
        },
        {
            workName: 'Todo List',
            workUrl: 'https://thelevius.github.io/todolist-app-front',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ',
            img: todoListImg,
            workReadMoreLink: 'https://thelevius.github.io/todolist-app-front',
        }
        ]);

    const workExamplesList = workExamples.map((el, i) => {
        return(
            <WorkExamples btnWatchFocus={workExamples[i].btnWatchFocus}
                          workExamples={el}
                          key={''+ i}
                          duration={700 + (i * 50)}
                          delay={200 + (i * 100)}
                          workUrl={el.workUrl}
                          workName={el.workName}
                          workReadMoreLink={el.workReadMoreLink}
            />
        )
    });
    return(
        <section className={styles.wrapper} id={'works'}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Fade bottom>
                        <SectionHeader headerText={'My Works'}/>
                    </Fade>
                    <div className={styles.workWrapper}>
                        {workExamplesList}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExamplesSection;