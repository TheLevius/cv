import React from 'react';
import styles from './Main.module.css';
import Represent1 from "./Represent1/Represent1";
import Represent2 from "./Represent2/Represent2";
import Represent3 from "./Represent3/Represent3";
import Represent4 from "./Represent4/Represent4";
import Represent5 from "./Represent5/Represent5";

const Main = () => {
    return(
      <main className="Main block">
          <div className={styles._wrapper}>
            <Represent1/>
            <Represent2/>
            <Represent3/>
            <Represent4/>
            <Represent5/>
          </div>
      </main>
    );
};

export default Main;