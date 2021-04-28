import React from 'react';

const Button = (props) => {
    return(
        <button className={`buttonDefault ${props.customStyles}`} type={props.type | 'button'} value={props.value | ''} onClick={props.onClickCallback} id={props.buttonId | ''} form={props.buttonForm | ''}>
            {props.text}
        </button>
    )
}

export default Button