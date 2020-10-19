import React from 'react';
import styles from './styles.module.css';

function Button({text,handleClick,isCancel}){
    const classes = [
        styles.btn
    ]
    if(isCancel){
        classes.push(styles.close)
    }
    return(
        <button onClick={handleClick} className={classes.join(' ')}>{text}</button>
    )
}

export default Button;
