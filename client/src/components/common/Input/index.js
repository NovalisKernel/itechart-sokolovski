import React from 'react';
import styles from './styles.module.css';


const Input = ({ type, handleChange, value }) => {
    return (
        <input className={styles.textInput} value={value} onChange={handleChange} type={type} />
    )
}

export default Input;