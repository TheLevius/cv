import React from 'react';
import styles from './Represent3.module.css'
import WorkExamples from "./WorksExample/WorkExample";
import HeaderH2 from "../../common/HeaderH2/HeaderH2";

const Represent3 = () => {
    const workExamples = [
        {workName: 'НазваниеПроекта1', workUrl: '#', shortDescription: 'Краткое описание проекта'},
        {workName: 'НазваниеПроекта2', workUrl: '#', shortDescription: 'Краткое описание проекта'}
        ];
    const workExamplesList = workExamples.map((el, i) => {
        return(
            <WorkExamples workExamples={el} />
        )
    });
    return(
        <div className="Represent3 block">
            <div className={styles._container}>
                <div className={styles._box}>
                    <HeaderH2 headerText={'Мои работы'}/>
                    <div className={styles._workWrapper}>
                        {workExamplesList}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Represent3;