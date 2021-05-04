import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <button className={`${styles.button} ${props.className ? props.className : null}`}
                type={props.type || 'button'}
                value={props.value || null}
                onClick={props.onClick ? (e)=>(props.onClick(e)) : null}
                onFocus={props.onFocus ? (e)=>(props.onFocus(e)) : null}
                onBlur={props.onBlur ? (e)=>(props.onBlur(e)) : null}
                id={props.buttonId || null}
                form={props.buttonForm || null}>
            {props.text}
        </button>
    )
}

export default Button