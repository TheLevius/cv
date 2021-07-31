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
         description: 'React это декларативная, эффективная и гибкая Javascript-библиотека для построения пользовательских интерфейсов.',
         skillIcon: reactIcon
        },
        {skill: 'REDUX',
         description: 'Универсальный, предсказуемый менеджер состояния для Javascript приложений.',
         skillIcon: reduxIcon
        },
        {skill: 'TYPESCRIPT',
         description: 'Является строгим синтаксическим надмножеством Javascript и добавляет языку опционально явную типизацию',
         skillIcon: typescriptIcon
        },
        {skill: 'CSS',
         description: 'формальный язык описания внешнего вида документа',
         skillIcon: css3Icon
        },
        {skill: 'HTML',
         description: 'язык гипертекстовой разметки',
         skillIcon: html5Icon
        },
        {skill: 'SASS',
            description: 'Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.',
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