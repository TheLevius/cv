import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <button className={`${styles.button} ${props.className === undefined ? '' : props.className}`}
                type={props.type || 'button'}
                value={props.value || ''}
                onClick={props.onClickCallback}
                id={props.buttonId || ''}
                form={props.buttonForm || ''}>
            {props.text}
        </button>
    )
}

export default Button