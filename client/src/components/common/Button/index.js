import React from 'react';
import styles from './styles.module.css';

function Button({text,handleClick}){

    return(
        <button onClick={handleClick} className={styles.btn}>{text}</button>
    )
}

export default Button;
