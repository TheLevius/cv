import React from 'react';
import styles from './Footer.module.scss';
import Social from "./Social/Social";
import { faFacebook, faVk, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const socials = [
        {socialName: 'facebook', baseUrl: 'https://www.facebook.com/', socialId: 'nikitalevitsky', faIconName: faFacebook},
        {socialName: 'вконтакте', baseUrl: 'https://www.vk.com/', socialId: 'nikitalevitsky', faIconName: faVk},
        {socialName: 'github', baseUrl: 'https://www.github.com/', socialId: 'TheLevius', faIconName: faGithub},
        {socialName: 'codewars', baseUrl: 'https://www.linkedin.com/in/', socialId: 'nikitalevitski', faIconName: faLinkedin}
    ];
    const socialsLinks = socials.map((el, i) => (<Social info={el} key={'' + i}/>));

    const onClickName = e => scroll.scrollToTop()

    return(

        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2 onClick={onClickName}>Levitsky</h2>
                    <div className={styles.socialWrapper}>
                        {socialsLinks}
                    </div>
                    <p>© 2021 MIT License</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;