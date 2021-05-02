import React from 'react';
import styles from './Social.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = (props) => {
    return(
      <div className="Social block">
          <div className={styles.wrapper}>
                <a className={styles.iconLink} href={`${props.info.baseUrl}${props.info.socialId}`}>
                    <FontAwesomeIcon icon={props.info.faIconName}/>
                </a>
          </div>
      </div>
    );
}

export default Social;