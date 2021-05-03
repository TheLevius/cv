import React, {useState} from 'react';
import styles from './PhotoRepresentSection.module.scss';
import avatarCv from './../../../assets/images/jpeg/avatars/avatarCv2.jpg';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import {animated} from 'react-spring';

const PhotoRepresentSection = props => {

    const [particlesOpt] = useState(
        {
            "particles": {
                "number": {
                    "value": 1,
                    "density": {
                        "enable": true,
                        "value_area": 15
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                },
                "opacity": {
                    "value": 0.2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 30,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#efefEf",
                    "opacity": 0.3,
                    "width": 0.3
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },

            "retina_detect": true
        }
    );

    return (
        <section className={styles.wrapper} >
            <div className={styles.container}>
                <div className={styles.box}>

                        <div className={styles.cell}>
                            <p><strong>Привет!</strong></p>
                            <h1>Меня зовут <span className={styles.inlinePlank}>Никита Левицкий </span></h1>
                            <h3>
                            <ReactTypingEffect staticText={'и'}
                                               text={'я React Front-end разработчик.'}
                                               speed={60}
                            />
                            </h3>
                        </div>
                        <div className={styles.cell}>
                            <div className={styles.holder}>
                                <animated.div className={styles.imgBox} style={{transform: props.params.xy.to(props.frameImg)}}/>
                                <animated.img className={styles.imgCv} src={avatarCv} style={{transform: props.params.xy.to(props.imgAva)}}/>
                            </div>
                        </div>

                </div>
            </div>
            <Particles className={styles.particles} canvasClassName={styles.particlesCanvas} params={particlesOpt} />
        </section>
    );

};

export default PhotoRepresentSection;