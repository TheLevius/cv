import React from 'react';
import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = (props) => {
    return(
      <div className="Social block">
          <div className={styles._wrapper}>
            <a className={styles._iconLink} href={`${props.info.baseUrl}${props.info.socialId}`}>
                <FontAwesomeIcon icon={props.info.faIconName}/>
            </a>
          </div>
      </div>
    );
}

export default Social;