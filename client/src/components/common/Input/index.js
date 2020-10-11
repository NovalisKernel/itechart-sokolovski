import React from 'react';
import styles from './styles.module.css';


const Input = ({ type, handleChange, value, placeholder }) => {
    return (
        <input className={styles.textInput} value={value} onChange={handleChange} placeholder={placeholder} type={type} />
    )
}

export default Input;