import React, {useState} from 'react';
import styles from './PhotoRepresentSection.module.scss';
import avatarCv from './../../../img/avatarCv.jpg';
import Particles from 'react-particles-js';

const PhotoRepresentSection = props => {

    const [particlesOpt] = useState(
        {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 1000
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
                    "color": "#ffffff",
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
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 700,
                        "line_linked": {
                            "opacity": 0.2
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 110,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    )

    return (
        <section className={styles.wrapper}>

            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.cell}>
                        <h1>Привет, меня зовут Никита Левицкий, <br />я front-end разработчик</h1>
                    </div>
                    <div className={styles.cell}>
                        <div className={styles.imgBox}>
                            <img src={avatarCv} alt="avatar CV" />
                        </div>
                    </div>
                </div>
            </div>
            <Particles className={styles.particles} canvasClassName={styles.particlesCanvas} params={particlesOpt} />
        </section>
    );
};

export default PhotoRepresentSection;