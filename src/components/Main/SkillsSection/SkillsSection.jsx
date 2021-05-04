import React from 'react';
import styles from './SkillsSection.module.scss';
import Skillpoint from './Skillpoint/Skillpoint';
import SectionHeader from "../../../common/components/headers/SectionHeader/SectionHeader";
import reduxIcon from '@iconify-icons/simple-icons/redux';
import reactIcon from '@iconify-icons/simple-icons/react';
import css3Icon from '@iconify-icons/simple-icons/css3';
import html5Icon from '@iconify-icons/simple-icons/html5';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import sassIcon from '@iconify-icons/simple-icons/sass';
import Fade from 'react-reveal/Fade';

const SkillsSection = () => {

    const skills = [
        {skill: 'REACT',
         description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' +
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
         skillIcon: reactIcon
        },
        {skill: 'REDUX',
         description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
         skillIcon: reduxIcon
        },
        {skill: 'TYPESCRIPT',
         description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true' +
                ' generator on the Internet. It uses a dictionary of over 200 Latin words',
         skillIcon: typescriptIcon
        },
        {skill: 'CSS',
         description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true' +
                ' generator on the Internet. It uses a dictionary of over 200 Latin words',
         skillIcon: css3Icon
        },
        {skill: 'HTML',
         description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true' +
                ' generator on the Internet. It uses a dictionary of over 200 Latin words',
         skillIcon: html5Icon
        },
        {skill: 'SASS',
            description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true' +
                ' generator on the Internet. It uses a dictionary of over 200 Latin words',
            skillIcon: sassIcon
        }
    ];
    const skillPoints = skills.map((el, i) => <Skillpoint skills={el}
                                                          key={''+ i}
                                                          delay={100 + (i * 50)}
                                                          duration={800}
    />);

    return(
        <section className={styles.wrapper} id={'skills'}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Fade bottom>
                    <SectionHeader headerText={'Мои навыки'}/>
                    </Fade>
                    <div className={styles.skillsWrapper}>

                        {skillPoints}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;