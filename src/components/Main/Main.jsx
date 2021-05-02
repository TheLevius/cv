import React from 'react';
import styles from './Main.module.scss';
import PhotoRepresentSection from "./PhotoRepresentSection/PhotoRepresentSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import WorkExamplesSection from "./WorkExamplesSection/WorkExamplesSection";
import RemoteJobSection from "./RemoteJobSection/RemoteJobSection";
import ContactFormSection from "./ContactFormSection/ContactFormSection";
import {useSpring} from 'react-spring';

const calcCursor = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const Main = () => {
    const [params, setParams] = useSpring(()=>({
        xy: [0, 0],
        config: {
            mass: 30,
            tension: 220,
            friction: 120
        }
    }));
    return(
        <main className={styles.page} onMouseOver={({ clientX: x, clientY: y }) => setParams({ xy: calcCursor(x, y) })}>
            <PhotoRepresentSection params={params} setParams={setParams}/>
            <SkillsSection/>
            <WorkExamplesSection/>
            <RemoteJobSection/>
            <ContactFormSection/>
        </main>
    );
};

export default Main;