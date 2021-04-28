import React from 'react';
import styles from './Main.module.scss';
import PhotoRepresentSection from "./PhotoRepresentSection/PhotoRepresentSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import WorkExamplesSection from "./WorkExamplesSection/WorkExamplesSection";
import RemoteJobSection from "./RemoteJobSection/RemoteJobSection";
import ContactFormSection from "./ContactFormSection/ContactFormSection";

const Main = () => {
    return(
        <main className={styles.page}>
            <PhotoRepresentSection/>
            <SkillsSection/>
            <WorkExamplesSection/>
            <RemoteJobSection/>
            <ContactFormSection/>
        </main>
    );
};

export default Main;