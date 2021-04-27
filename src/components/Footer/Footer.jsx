import React from 'react';
import styles from './Footer.module.css';
import Social from "./Social/Social";
import { faFacebook, faVk, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const socials = [
        {socialName: 'facebook', baseUrl: 'https://www.facebook.com/', socialId: 'nikitalevitsky', faIconName: faFacebook},
        {socialName: 'вконтакте', baseUrl: 'https://www.vk.com/', socialId: 'nikitalevitsky', faIconName: faVk},
        {socialName: 'github', baseUrl: 'https://www.github.com/', socialId: 'TheLevius', faIconName: faGithub},
        {socialName: 'codewars', baseUrl: 'https://www.linkedin.com/in/', socialId: 'nikitalevitski', faIconName: faLinkedin}
    ];
    const socialsLinks = socials.map((el, i) => (<Social info={el}/>));

    return(
        <footer className="Footer block dark1">
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <div className={styles._box}>
                        <h2>Никита Левицкий</h2>
                        <div className={styles._socialWrapper}>
                            {socialsLinks}
                        </div>
                        <p>© 2021 MIT License</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;