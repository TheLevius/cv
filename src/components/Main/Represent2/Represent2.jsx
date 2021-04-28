import React from 'react';
import styles from './Represent2.module.css';
import Skillpoint from './Skillpoint/Skillpoint';
import HeaderH2 from "../../common/HeaderH2/HeaderH2";
import reduxIcon from '@iconify-icons/simple-icons/redux';
import reactIcon from '@iconify-icons/simple-icons/react';
import css3Icon from '@iconify-icons/simple-icons/css3';
import html5Icon from '@iconify-icons/simple-icons/html5';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';

const Represent2 = () => {

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
        }
    ];
    const skillPoints = skills.map((el, i) => <Skillpoint skills={el} key={''+ i}/>);

    return(
        <div className="Represent2 block">
            <div className={styles._container}>
                <div className={styles._box}>
                    <HeaderH2  headerText={'Мои навыки'}/>
                    <div className={styles._skillsWrapper}>
                        {skillPoints}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Represent2;